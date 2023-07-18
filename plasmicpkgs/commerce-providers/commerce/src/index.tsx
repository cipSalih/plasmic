import { Registerable } from "./registerable";
import { registerAddToCartButton } from "./registerAddToCartButton";
import { registerCart } from "./registerCart";
import { registerCartProvider } from "./registerCartProvider";
import { registerCategoryCollection } from "./registerCategoryCollection";
import { registerCategoryField } from "./registerCategoryField";
import { registerCategoryLink } from "./registerCategoryLink";
import { registerCategoryMedia } from "./registerCategoryMedia";
import { registerProductBox } from "./registerProductBox";
import { registerProductCollection } from "./registerProductCollection";
import { registerProductLink } from "./registerProductLink";
import { registerProductMedia } from "./registerProductMedia";
import { registerProductMediaCollection } from "./registerProductMediaCollection";
import { registerProductPrice } from "./registerProductPrice";
import { registerProductQuantity } from "./registerProductQuantity";
import { registerProductSlider } from "./registerProductSlider";
import { registerTextField } from "./registerProductTextField";
import { registerProductVariantPicker } from "./registerProductVariantPicker";

export { CommerceAPIConfig } from "./api/index";
export * from "./cart/use-add-item";
export { default as useAddItem } from "./cart/use-add-item";
export * from "./cart/use-cart";
export { default as useCart } from "./cart/use-cart";
export * from "./cart/use-remove-item";
export { default as useRemoveItem } from "./cart/use-remove-item";
export * from "./cart/use-update-item";
export { default as useUpdateItem } from "./cart/use-update-item";
export * from "./commerce";
export * from "./product/use-product";
export { default as useProduct } from "./product/use-product";
export * from "./product/use-search";
export { default as useSearch } from "./product/use-search";
export * from "./registerable";
export * from "./registerAddToCartButton";
export * from "./registerCart";
export * from "./registerCartProvider";
export * from "./registerCategoryCollection";
export * from "./registerCategoryField";
export * from "./registerCategoryLink";
export * from "./registerCategoryMedia";
export * from "./registerProductBox";
export * from "./registerProductCollection";
export * from "./registerProductLink";
export * from "./registerProductMedia";
export * from "./registerProductMediaCollection";
export * from "./registerProductPrice";
export * from "./registerProductQuantity";
export * from "./registerProductSlider";
export * from "./registerProductTextField";
export * from "./registerProductVariantPicker";
export * from "./site/use-brands";
export { default as useBrands } from "./site/use-brands";
export * from "./site/use-categories";
export { default as useCategories } from "./site/use-categories";
export * as CartType from "./types/cart";
export * from "./types/product";
export * as ProductTypes from "./types/product";
export * as SiteTypes from "./types/site";
export { defaultProduct as ProductPlaceholder } from "./utils/default-product";
export * from "./utils/errors";
export * from "./utils/types";
export { globalActionsRegistrations, CartActionsProvider } from "./contexts";

export function registerAll(loader?: Registerable) {
  registerProductCollection(loader);
  registerTextField(loader);
  registerProductPrice(loader);
  registerProductMedia(loader);
  registerProductMediaCollection(loader);
  registerCart(loader);
  registerCartProvider(loader);
  registerAddToCartButton(loader);
  registerProductQuantity(loader);
  registerProductVariantPicker(loader);
  registerProductBox(loader);
  registerProductSlider(loader);
  registerProductLink(loader);
  registerCategoryCollection(loader);
  registerCategoryField(loader);
  registerCategoryLink(loader);
  registerCategoryMedia(loader);
}
