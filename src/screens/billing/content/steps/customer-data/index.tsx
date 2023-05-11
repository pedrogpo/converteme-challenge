import * as S from './styles'
import { Button, Input, InputMask, Text } from '~/components/atoms'
import { useFormContext, useWatch } from 'react-hook-form'
import { BillingFormTypeInput } from '~/core/schemas/billingForm'
import { ChooseButton, ChooseContainer, NextButtonContainer } from '../../styles'
import { useState } from 'react'
import Fuse from 'fuse.js'
import { customersMock } from './mock'
import { ICustomer } from '~/interfaces/billing/customer'
import { FaChevronDown } from 'react-icons/fa'
import { AnimatePresence, motion } from 'framer-motion'
import { billingSteps } from '~/store/billing/steps'
import Toast from '~/core/toast'

// TODO: uncouple this from this file

function SearchCustomer() {
  const [inputSearch, setInputSearch] = useState('')
  const { setValue } = useFormContext<BillingFormTypeInput>()

  const selectedCustomer: ICustomer = useWatch({
    name: 'steps.customerData.selected_customer',
  })

  const options = {
    includeScore: true,
    shouldSort: true,
    keys: ['name', 'cpfOrCnpj', 'cellphone', 'email'],
  }

  const fuse = new Fuse(customersMock, options)

  return (
    <S.SearchCustomerContainer>
      <Text size="xs" weight="regular" color="gray_600">
        Cliente
      </Text>
      <Input
        className="__input"
        onChange={(e) => {
          setInputSearch(e.target.value)
        }}
        value={inputSearch}
        placeholder="Pesquisar cliente"
      />
      <Text size="xs" color="gray_600" weight="regular">
        {selectedCustomer
          ? `Cliente selecionado: ${selectedCustomer.name} (${selectedCustomer.cpfOrCnpj})`
          : 'Nenhum cliente selecionado'}
      </Text>
      {inputSearch && (
        <S.CustomerListContainer>
          <S.CustomerListHead>
            <S.CustomerListTRHead>
              <S.CustomerListItemHead>Nome</S.CustomerListItemHead>
              <S.CustomerListItemHead>CPF ou CNPJ</S.CustomerListItemHead>
              <S.CustomerListItemHead>Celular</S.CustomerListItemHead>
              <S.CustomerListItemHead>Email</S.CustomerListItemHead>
              <S.CustomerListItemHead>Selecionar</S.CustomerListItemHead>
            </S.CustomerListTRHead>
          </S.CustomerListHead>
          <S.CustomerListBody>
            {fuse.search(inputSearch).map((result, index) => (
              <>
                <S.CustomerListTRBody key={index}>
                  <S.CustomerListItemBody>
                    <Text size="xs" color="gray_600" weight="medium">
                      {result.item.name}
                    </Text>
                  </S.CustomerListItemBody>
                  <S.CustomerListItemBody>
                    <Text size="xs" color="gray_600" weight="medium">
                      {result.item.cpfOrCnpj}
                    </Text>
                  </S.CustomerListItemBody>
                  <S.CustomerListItemBody>
                    <Text size="xs" color="gray_600" weight="medium">
                      {result.item.cellphone}
                    </Text>
                  </S.CustomerListItemBody>
                  <S.CustomerListItemBody>
                    <Text size="xs" color="gray_600" weight="medium">
                      {result.item.email}
                    </Text>
                  </S.CustomerListItemBody>
                  <S.CustomerListItemBody>
                    <S.MethodButton
                      boxShadow={false}
                      fill="contained"
                      hug={false}
                      size="m"
                      color="primary_500"
                      onClick={() => {
                        setValue('steps.customerData.selected_customer', result.item)
                        setInputSearch('')
                      }}
                    >
                      Selecionar
                    </S.MethodButton>
                  </S.CustomerListItemBody>
                </S.CustomerListTRBody>
                {/* <div>
                  <h1>kkk</h1>
                </div> */}
              </>
            ))}
          </S.CustomerListBody>
        </S.CustomerListContainer>
      )}
    </S.SearchCustomerContainer>
  )
}

function RegisterCustomer() {
  const {
    register,
    formState: { errors },
  } = useFormContext<BillingFormTypeInput>()

  const [collapsedMoreInfo, setCollapsedMoreInfo] = useState(false)

  return (
    <S.RegisterCustomerContainer>
      <Text size="xs" weight="regular" color="gray_600">
        Nome do cliente
      </Text>
      <Input
        {...register('steps.customerData.selected_customer.name')}
        className="__input"
        placeholder="Informe o nome do cliente"
        error={errors.steps?.customerData?.selected_customer?.name?.message}
      />

      <S.RegisterCustomerInputs>
        <Input
          {...register('steps.customerData.selected_customer.cpfOrCnpj')}
          label="CPF/CNPJ"
          placeholder="000.000.000-00"
          error={errors.steps?.customerData?.selected_customer?.cpfOrCnpj?.message}
        />
        <Input
          {...register('steps.customerData.selected_customer.email')}
          label="E-mail (Opcional)"
          placeholder="Informe o e-mail"
          type="email"
        />
        <Input
          {...register('steps.customerData.selected_customer.cellphone')}
          label="Celular (Opcional)"
          placeholder="Informe o celular"
        />
      </S.RegisterCustomerInputs>

      <S.MoreInfo
        active={!collapsedMoreInfo}
        onClick={() => {
          setCollapsedMoreInfo(!collapsedMoreInfo)
        }}
      >
        <Text size="sm" color="black" weight="bold" uppercase>
          Mais informações
        </Text>
        <FaChevronDown size={12} color="black" />
      </S.MoreInfo>

      {/* <AnimatePresence> */}
      {!collapsedMoreInfo && (
        <>
          <S.RegisterCustomerInputs>
            <InputMask
              {...register('steps.customerData.selected_customer.address.cep')}
              label="CEP (Opcional)"
              placeholder="000000-000"
              mask="99999-999"
            />
            <Input
              {...register('steps.customerData.selected_customer.address.city')}
              label="Cidade (Opcional)"
              placeholder="Informe a cidade"
            />
            <Input
              {...register('steps.customerData.selected_customer.address.street')}
              label="Rua (Opcional)"
              placeholder="Informe a rua"
            />
          </S.RegisterCustomerInputs>
          <S.RegisterCustomerInputs>
            <Input
              {...register('steps.customerData.selected_customer.address.neighborhood')}
              label="Bairro (Opcional)"
              placeholder="Informe o bairro"
            />
            <Input
              {...register('steps.customerData.selected_customer.address.number')}
              label="Número (Opcional)"
              placeholder="Informe o número"
            />
            <Input
              {...register('steps.customerData.selected_customer.address.reference')}
              label="Referência (Opcional)"
              placeholder="Informe a referência"
            />
          </S.RegisterCustomerInputs>
        </>
      )}
      {/* </AnimatePresence> */}
    </S.RegisterCustomerContainer>
  )
}

function ChooseCustomerType() {
  const { setValue, resetField } = useFormContext<BillingFormTypeInput>()

  const [selected, setSelected] = useState(0)

  const customerType = ['Cliente cadastrado', 'Novo cliente']

  return (
    <S.ChooseCustomerType>
      <Text size="sm" weight="bold" color="black" uppercase>
        Quem você vai cobrar?
      </Text>

      <ChooseContainer>
        {customerType.map((mode, index) => (
          <ChooseButton
            type="button"
            key={index}
            active={selected === index}
            onClick={() => {
              setSelected(index)
              resetField('steps.customerData.selected_customer')
              setValue('steps.customerData.is_new_customer', index == 1)
            }}
          >
            {mode}
          </ChooseButton>
        ))}
      </ChooseContainer>

      {selected == 0 && <SearchCustomer />}
      {selected == 1 && <RegisterCustomer />}
    </S.ChooseCustomerType>
  )
}

function ChooseShippingMethod() {
  const { setValue } = useFormContext<BillingFormTypeInput>()

  const billingMethod: string[] = useWatch({
    name: 'steps.customerData.billing_shipping_method',
  })

  const shippingMethods = [
    { label: 'Whatsapp', icon: <></> },
    { label: 'SMS', icon: <></> },
    {
      label: 'E-mail',
      icon: <></>,
    },
    {
      label: 'Impresso',
      icon: <></>,
    },
    {
      label: 'Correios',
      icon: <></>,
    },
  ]

  const addMethod = (label: string) => {
    const currentFiles = billingMethod || []

    setValue('steps.customerData.billing_shipping_method', [...currentFiles, label])
  }

  const removeMethod = (label: string) => {
    const currentFiles = billingMethod || []

    setValue(
      'steps.customerData.billing_shipping_method',
      currentFiles.filter((method) => method !== label)
    )
  }

  return (
    <S.ButtonList>
      {shippingMethods.map((method) => (
        <S.MethodButton
          onClick={() => {
            if (billingMethod?.includes(method.label)) {
              removeMethod(method.label)
            } else {
              addMethod(method.label)
            }
          }}
          boxShadow={false}
          fill="contained"
          hug={false}
          size="m"
          color={billingMethod?.includes(method.label) ? 'primary_500' : 'gray_600'}
        >
          {method.label}
        </S.MethodButton>
      ))}
    </S.ButtonList>
  )
}

// TODO: uncouple this from this file

export default function CustomerData() {
  const { trigger } = useFormContext<BillingFormTypeInput>()

  return (
    <S.CustomerData>
      <S.CustomerDataHead>
        <Text size="sm" weight="bold" color="black" uppercase>
          Como essa cobrança será enviada?
        </Text>
        <Text size="xs" weight="regular" color="gray_600">
          Selecione como essa cobrança será enviada ao seu cliente.
        </Text>

        <ChooseShippingMethod />
      </S.CustomerDataHead>
      <ChooseCustomerType />

      <NextButtonContainer>
        <Button
          hug={false}
          type="button"
          onClick={() => {
            billingSteps.previousStep()
          }}
        >
          VOLTAR
        </Button>
        <Button
          hug={false}
          type="button"
          onClick={() => {
            trigger('steps.customerData').then((isValid) => {
              if (isValid) {
                billingSteps.nextStep()
              } else {
                Toast({
                  message: 'Você precisa selecionar ou registrar um cliente',
                  type: 'error',
                })
              }
            })
          }}
        >
          AVANÇAR
        </Button>
      </NextButtonContainer>
    </S.CustomerData>
  )
}
