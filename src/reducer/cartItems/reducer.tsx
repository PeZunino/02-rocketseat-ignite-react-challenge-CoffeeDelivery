import { ICartItem } from "../../context/CartItems/CartItemsContext";
import { ActionsType, ActionTypesProps } from "./actions";

export function cartItemsReducer(state: ICartItem[], action: ActionTypesProps) {
  switch (action.type) {
    case ActionsType.ADD_ITEM: {
      const alreadyInCart = state.find(
        ({ coffee }) => coffee.id == action.payload.item.coffee.id
      );

      if (!alreadyInCart) return [...state, action.payload.item];

      return state.map((item) => {
        if (item.coffee.id != action.payload.item.coffee.id) return item;
        return {
          amount: item.amount + action.payload.item.amount,
          coffee: item.coffee,
        } as ICartItem;
      });
    }

    case ActionsType.DECREMENT_ITEM:
      return state.map((item) => {
        if (item.coffee.id != action.payload.id) return item;
        return {
          amount: item.amount == 1 ? 1 : item.amount - 1,
          coffee: item.coffee,
        } as ICartItem;
      });

    case ActionsType.INCREMENT_ITEM:
      return state.map((item) => {
        if (item.coffee.id != action.payload.id) return item;
        return {
          amount: item.amount + 1,
          coffee: item.coffee,
        } as ICartItem;
      });

    case ActionsType.REMOVE_ITEM:
      return state.filter((item) => item.coffee.id != action.payload.id);

    case ActionsType.CLEAN_CART:
      return [] as ICartItem[];
    default:
      return state;
  }
}
