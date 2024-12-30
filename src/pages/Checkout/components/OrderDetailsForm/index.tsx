import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from "@phosphor-icons/react";
import {
  AddressFormContainer,
  ContainerTitle,
  AddressFormInputGrid,
  PaymentTypeContainer,
  StyledForm,
  InputContainer,
  ErrorMessage,
} from "./styles";
import { useTheme } from "styled-components";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../../hooks/useCart";

const orderComplementFormValidationSchema = zod.object({
  code: zod
    .number({
      message: "obrigatório",
      invalid_type_error: "deve conter apenas números",
    })
    .refine((value) => String(value).length == 8, {
      message: "deve conter 8 dígitos",
    }),

  street: zod.string().min(1, "obrigatório"),
  number: zod.number({
    message: "obrigatório",

    invalid_type_error: "deve conter apenas números",
  }),
  neighborhood: zod.string().min(1, "obrigatório"),
  city: zod.string().min(1, "obrigatório"),
  state: zod
    .string()
    .min(2, "inválido")
    .max(2, "inválido")
    .refine((value) => !/\d/.test(value), {
      message: "inválido",
    }),
  paymentType: zod.enum(["credit", "debit", "money"], {
    invalid_type_error: "Selecione uma forma de pagamento",
  }),
});

type OrderComplementFormData = zod.infer<
  typeof orderComplementFormValidationSchema
>;

export function OrderDetailsForm() {
  const { colors } = useTheme();
  const navigate = useNavigate();
  const { clearCart } = useCart();
  const { register, handleSubmit, formState } =
    useForm<OrderComplementFormData>({
      resolver: zodResolver(orderComplementFormValidationSchema),
      defaultValues: {
        city: "",
        neighborhood: "",
        state: "",
        street: "",
      },
    });
  function handleConfirmOrder() {
    clearCart();

    navigate("/success");
  }
  const { city, code, neighborhood, number, street, state, paymentType } =
    formState.errors;
  return (
    <StyledForm id="form" onSubmit={handleSubmit(handleConfirmOrder)}>
      <AddressFormContainer>
        <ContainerTitle>
          <MapPinLine size={22} color={colors["yellow-dark"]} />
          <div>
            <p>Endereço de Entrega</p>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </ContainerTitle>

        <AddressFormInputGrid>
          <div>
            <InputContainer>
              <input
                type="number"
                placeholder="CEP"
                id="code"
                {...register("code", { valueAsNumber: true })}
              />
              {code?.message ? (
                <ErrorMessage>{code?.message}</ErrorMessage>
              ) : null}
            </InputContainer>
          </div>

          <div>
            <InputContainer>
              <input
                type="text"
                placeholder="Rua"
                id="street"
                {...register("street")}
              />
              {street?.message ? (
                <ErrorMessage>{street?.message}</ErrorMessage>
              ) : null}
            </InputContainer>
          </div>

          <div>
            <InputContainer>
              <input
                type="text"
                placeholder="Número"
                id="number"
                {...register("number", { valueAsNumber: true })}
              />
              {number?.message ? (
                <ErrorMessage>{number?.message}</ErrorMessage>
              ) : null}
            </InputContainer>

            <InputContainer>
              <input type="text" placeholder="Complemento" id="complement" />
            </InputContainer>
          </div>

          <div>
            <InputContainer>
              <input
                type="text"
                placeholder="Bairro"
                id="neighborhood"
                {...register("neighborhood")}
              />
              {neighborhood?.message ? (
                <ErrorMessage>{neighborhood?.message}</ErrorMessage>
              ) : null}
            </InputContainer>
            <InputContainer>
              <input
                type="text"
                placeholder="Cidade"
                id="city"
                {...register("city")}
              />
              {city?.message ? (
                <ErrorMessage>{city?.message}</ErrorMessage>
              ) : null}
            </InputContainer>
            <InputContainer>
              <input
                type="text"
                placeholder="UF"
                id="state"
                {...register("state")}
              />
              {state?.message ? (
                <ErrorMessage>{state?.message}</ErrorMessage>
              ) : null}
            </InputContainer>
          </div>
        </AddressFormInputGrid>
      </AddressFormContainer>

      <PaymentTypeContainer>
        <ContainerTitle>
          <CurrencyDollar size={22} color={colors.purple} />
          <div>
            <p>Pagamento</p>
            <span>
              O pagamento é feito na entrega. Escolha a forma que desejar pagar
            </span>
          </div>
        </ContainerTitle>

        <section>
          <input
            type="radio"
            id="credit"
            value="credit"
            {...register("paymentType")}
          />
          <label htmlFor="credit">
            <CreditCard size={16} color={colors.purple} />
            <span>CARTÃO DE CRÉDITO</span>
          </label>

          <input
            type="radio"
            id="debit"
            value="debit"
            {...register("paymentType")}
          />
          <label htmlFor="debit">
            <Bank size={16} color={colors.purple} />
            <span>CARTÃO DE DÉBITO</span>
          </label>
          <input
            type="radio"
            id="money"
            value="money"
            {...register("paymentType")}
          />
          <label htmlFor="money">
            <Money size={16} color={colors.purple} />
            <span>DINHEIRO</span>
          </label>
          {paymentType?.message ? (
            <ErrorMessage>{paymentType?.message}</ErrorMessage>
          ) : null}
        </section>
      </PaymentTypeContainer>
    </StyledForm>
  );
}
