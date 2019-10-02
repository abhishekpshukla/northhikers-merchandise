import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionForPreview = createSelector(
    [selectShopCollections],
    collections => {
        console.log("00000000000 >>>>>>>>>", collections);
        return Object.keys(collections).map((key) => collections[key])
    }
);

export const selectCollection = collectionUrlParam =>
    createSelector(
        [selectShopCollections],
        collections => collections[collectionUrlParam]
    ); 