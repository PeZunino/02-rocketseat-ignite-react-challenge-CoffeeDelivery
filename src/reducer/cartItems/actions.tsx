import { ICartItem } from "../../context/CartItems/CartItemsContext";

export enum ActionsType {
  ADD_ITEM = "ADD_ITEM ",
  DECREMENT_ITEM = "DECREMENT_ITEM ",
  INCREMENT_ITEM = "INCREMENT_ITEM ",
  REMOVE_ITEM = "REMOVE_ITEM ",
  CLEAN_CART = "CLEAN_CART ",
}

export type ActionTypesProps =
  | { type: ActionsType.ADD_ITEM; payload: { item: ICartItem } }
  | { type: ActionsType.CLEAN_CART }
  | { type: ActionsType.REMOVE_ITEM; payload: { id: string } }
  | { type: ActionsType.INCREMENT_ITEM; payload: { id: string } }
  | { type: ActionsType.DECREMENT_ITEM; payload: { id: string } };

export function addItemToCartAction(item: ICartItem): ActionTypesProps {
  return {
    type: ActionsType.ADD_ITEM,
    payload: { item },
  };
}
export function cleanCartAction(): ActionTypesProps {
  return {
    type: ActionsType.CLEAN_CART,
  };
}

export function removeItemAction(id: string): ActionTypesProps {
  return {
    type: ActionsType.REMOVE_ITEM,
    payload: { id },
  };
}

export function incrementItemAction(id: string): ActionTypesProps {
  return {
    type: ActionsType.INCREMENT_ITEM,
    payload: { id },
  };
}

export function decrementItemAction(id: string): ActionTypesProps {
  return {
    type: ActionsType.DECREMENT_ITEM,
    payload: { id },
  };
}
