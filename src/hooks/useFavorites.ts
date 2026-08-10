import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

const FAVORITES_STORAGE_KEY = "deckgg:favorites";
const FAVORITES_CHANGED_EVENT =
  "deckgg:favorites-changed";

export type FavoriteProPlayer = {
  type: "pro-player";
  id: string;
  nickname: string;
  slug: string;
  teamShortName?: string;
};

export type FavoriteProTeam = {
  type: "pro-team";
  id: string;
  name: string;
  slug: string;
  shortName: string;
};

export type FavoriteValorantAccount = {
  type: "valorant-account";
  name: string;
  tag: string;
};

export type FavoriteItem =
  | FavoriteProPlayer
  | FavoriteProTeam
  | FavoriteValorantAccount;

const getFavoriteKey = (item: FavoriteItem) => {
  if (item.type === "valorant-account") {
    return `${item.type}:${item.name.toLowerCase()}#${item.tag.toLowerCase()}`;
  }

  return `${item.type}:${item.id}`;
};

const readFavorites = (): FavoriteItem[] => {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const stored = window.localStorage.getItem(
      FAVORITES_STORAGE_KEY,
    );

    if (!stored) {
      return [];
    }

    const parsed = JSON.parse(stored);

    return Array.isArray(parsed)
      ? (parsed as FavoriteItem[])
      : [];
  } catch {
    return [];
  }
};

const writeFavorites = (
  favorites: FavoriteItem[],
) => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(
    FAVORITES_STORAGE_KEY,
    JSON.stringify(favorites),
  );

  window.dispatchEvent(
    new Event(FAVORITES_CHANGED_EVENT),
  );
};

export default function useFavorites() {
  const [favorites, setFavorites] =
    useState<FavoriteItem[]>(() => readFavorites());

  useEffect(() => {
    const syncFavorites = () => {
      setFavorites(readFavorites());
    };

    const handleStorage = (
      event: StorageEvent,
    ) => {
      if (
        event.key === FAVORITES_STORAGE_KEY ||
        event.key === null
      ) {
        syncFavorites();
      }
    };

    window.addEventListener(
      FAVORITES_CHANGED_EVENT,
      syncFavorites,
    );

    window.addEventListener(
      "storage",
      handleStorage,
    );

    return () => {
      window.removeEventListener(
        FAVORITES_CHANGED_EVENT,
        syncFavorites,
      );

      window.removeEventListener(
        "storage",
        handleStorage,
      );
    };
  }, []);

  const favoriteKeys = useMemo(
    () => new Set(favorites.map(getFavoriteKey)),
    [favorites],
  );

  const isFavorite = useCallback(
    (item: FavoriteItem) =>
      favoriteKeys.has(getFavoriteKey(item)),
    [favoriteKeys],
  );

  const addFavorite = useCallback(
    (item: FavoriteItem) => {
      const current = readFavorites();
      const itemKey = getFavoriteKey(item);

      const alreadyExists = current.some(
        (favorite) =>
          getFavoriteKey(favorite) === itemKey,
      );

      if (alreadyExists) {
        return;
      }

      writeFavorites([...current, item]);
    },
    [],
  );

  const removeFavorite = useCallback(
    (item: FavoriteItem) => {
      const current = readFavorites();
      const itemKey = getFavoriteKey(item);

      writeFavorites(
        current.filter(
          (favorite) =>
            getFavoriteKey(favorite) !== itemKey,
        ),
      );
    },
    [],
  );

  const toggleFavorite = useCallback(
    (item: FavoriteItem) => {
      const current = readFavorites();
      const itemKey = getFavoriteKey(item);

      const alreadyExists = current.some(
        (favorite) =>
          getFavoriteKey(favorite) === itemKey,
      );

      if (alreadyExists) {
        writeFavorites(
          current.filter(
            (favorite) =>
              getFavoriteKey(favorite) !== itemKey,
          ),
        );

        return;
      }

      writeFavorites([...current, item]);
    },
    [],
  );

  const proPlayerFavorites = useMemo(
    () =>
      favorites.filter(
        (
          item,
        ): item is FavoriteProPlayer =>
          item.type === "pro-player",
      ),
    [favorites],
  );

  const proTeamFavorites = useMemo(
    () =>
      favorites.filter(
        (
          item,
        ): item is FavoriteProTeam =>
          item.type === "pro-team",
      ),
    [favorites],
  );

  const valorantAccountFavorites = useMemo(
    () =>
      favorites.filter(
        (
          item,
        ): item is FavoriteValorantAccount =>
          item.type === "valorant-account",
      ),
    [favorites],
  );

  return {
    favorites,
    proPlayerFavorites,
    proTeamFavorites,
    valorantAccountFavorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
  };
}