export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Date: any
  DateTime: any
  JSON: any
  Long: any
  Time: any
  Upload: any
}

export type AdminUser = {
  __typename?: 'AdminUser'
  firstname: Scalars['String']
  id: Scalars['ID']
  lastname: Scalars['String']
  username?: Maybe<Scalars['String']>
}

export type Checkpoint = {
  __typename?: 'Checkpoint'
  created_at: Scalars['DateTime']
  id: Scalars['ID']
  inventory?: Maybe<Inventory>
  inventory_meter_checkpoints?: Maybe<Array<Maybe<InventoryMeterCheckpoint>>>
  name: Scalars['String']
  order: Scalars['Int']
  updated_at: Scalars['DateTime']
}

export type CheckpointInventory_Meter_CheckpointsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type CheckpointAggregator = {
  __typename?: 'CheckpointAggregator'
  avg?: Maybe<CheckpointAggregatorAvg>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<CheckpointAggregatorMax>
  min?: Maybe<CheckpointAggregatorMin>
  sum?: Maybe<CheckpointAggregatorSum>
  totalCount?: Maybe<Scalars['Int']>
}

export type CheckpointAggregatorAvg = {
  __typename?: 'CheckpointAggregatorAvg'
  order?: Maybe<Scalars['Float']>
}

export type CheckpointAggregatorMax = {
  __typename?: 'CheckpointAggregatorMax'
  order?: Maybe<Scalars['Float']>
}

export type CheckpointAggregatorMin = {
  __typename?: 'CheckpointAggregatorMin'
  order?: Maybe<Scalars['Float']>
}

export type CheckpointAggregatorSum = {
  __typename?: 'CheckpointAggregatorSum'
  order?: Maybe<Scalars['Float']>
}

export type CheckpointConnection = {
  __typename?: 'CheckpointConnection'
  aggregate?: Maybe<CheckpointAggregator>
  groupBy?: Maybe<CheckpointGroupBy>
  values?: Maybe<Array<Maybe<Checkpoint>>>
}

export type CheckpointConnectionCreated_At = {
  __typename?: 'CheckpointConnectionCreated_at'
  connection?: Maybe<CheckpointConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type CheckpointConnectionId = {
  __typename?: 'CheckpointConnectionId'
  connection?: Maybe<CheckpointConnection>
  key?: Maybe<Scalars['ID']>
}

export type CheckpointConnectionInventory = {
  __typename?: 'CheckpointConnectionInventory'
  connection?: Maybe<CheckpointConnection>
  key?: Maybe<Scalars['ID']>
}

export type CheckpointConnectionName = {
  __typename?: 'CheckpointConnectionName'
  connection?: Maybe<CheckpointConnection>
  key?: Maybe<Scalars['String']>
}

export type CheckpointConnectionOrder = {
  __typename?: 'CheckpointConnectionOrder'
  connection?: Maybe<CheckpointConnection>
  key?: Maybe<Scalars['Int']>
}

export type CheckpointConnectionUpdated_At = {
  __typename?: 'CheckpointConnectionUpdated_at'
  connection?: Maybe<CheckpointConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type CheckpointGroupBy = {
  __typename?: 'CheckpointGroupBy'
  created_at?: Maybe<Array<Maybe<CheckpointConnectionCreated_At>>>
  id?: Maybe<Array<Maybe<CheckpointConnectionId>>>
  inventory?: Maybe<Array<Maybe<CheckpointConnectionInventory>>>
  name?: Maybe<Array<Maybe<CheckpointConnectionName>>>
  order?: Maybe<Array<Maybe<CheckpointConnectionOrder>>>
  updated_at?: Maybe<Array<Maybe<CheckpointConnectionUpdated_At>>>
}

export type CheckpointInput = {
  created_by?: InputMaybe<Scalars['ID']>
  inventory?: InputMaybe<Scalars['ID']>
  inventory_meter_checkpoints?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  name: Scalars['String']
  order: Scalars['Int']
  updated_by?: InputMaybe<Scalars['ID']>
}

export type Country = {
  __typename?: 'Country'
  created_at: Scalars['DateTime']
  emission_factor_validities?: Maybe<Array<Maybe<EmissionFactorValidity>>>
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  published_at?: Maybe<Scalars['DateTime']>
  shorthand?: Maybe<Scalars['String']>
  updated_at: Scalars['DateTime']
}

export type CountryEmission_Factor_ValiditiesArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type CountryAggregator = {
  __typename?: 'CountryAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type CountryConnection = {
  __typename?: 'CountryConnection'
  aggregate?: Maybe<CountryAggregator>
  groupBy?: Maybe<CountryGroupBy>
  values?: Maybe<Array<Maybe<Country>>>
}

export type CountryConnectionCreated_At = {
  __typename?: 'CountryConnectionCreated_at'
  connection?: Maybe<CountryConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type CountryConnectionId = {
  __typename?: 'CountryConnectionId'
  connection?: Maybe<CountryConnection>
  key?: Maybe<Scalars['ID']>
}

export type CountryConnectionName = {
  __typename?: 'CountryConnectionName'
  connection?: Maybe<CountryConnection>
  key?: Maybe<Scalars['String']>
}

export type CountryConnectionPublished_At = {
  __typename?: 'CountryConnectionPublished_at'
  connection?: Maybe<CountryConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type CountryConnectionShorthand = {
  __typename?: 'CountryConnectionShorthand'
  connection?: Maybe<CountryConnection>
  key?: Maybe<Scalars['String']>
}

export type CountryConnectionUpdated_At = {
  __typename?: 'CountryConnectionUpdated_at'
  connection?: Maybe<CountryConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type CountryGroupBy = {
  __typename?: 'CountryGroupBy'
  created_at?: Maybe<Array<Maybe<CountryConnectionCreated_At>>>
  id?: Maybe<Array<Maybe<CountryConnectionId>>>
  name?: Maybe<Array<Maybe<CountryConnectionName>>>
  published_at?: Maybe<Array<Maybe<CountryConnectionPublished_At>>>
  shorthand?: Maybe<Array<Maybe<CountryConnectionShorthand>>>
  updated_at?: Maybe<Array<Maybe<CountryConnectionUpdated_At>>>
}

export type CountryInput = {
  created_by?: InputMaybe<Scalars['ID']>
  emission_factor_validities?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  name?: InputMaybe<Scalars['String']>
  published_at?: InputMaybe<Scalars['DateTime']>
  shorthand?: InputMaybe<Scalars['String']>
  updated_by?: InputMaybe<Scalars['ID']>
}

export enum Enum_Inventorymeterelectricity_Device_Category {
  Basic = 'basic',
  FourQuadrants = 'fourQuadrants',
  Multimeter = 'multimeter',
  SmartCircuitBreaker = 'smartCircuitBreaker',
}

export enum Enum_Inventorymeterelectricity_Mct {
  Mct50 = 'MCT50',
  Mct75 = 'MCT75',
  Mct100 = 'MCT100',
  Mct125 = 'MCT125',
  Mct150 = 'MCT150',
  Mct200 = 'MCT200',
  Mct250 = 'MCT250',
  Mct300 = 'MCT300',
  Mct400 = 'MCT400',
  Mct500 = 'MCT500',
  Mct600 = 'MCT600',
  Mct800 = 'MCT800',
  Mct1000 = 'MCT1000',
  Mct1250 = 'MCT1250',
  Mct1500 = 'MCT1500',
  Mct1600 = 'MCT1600',
  Mct2000 = 'MCT2000',
  Mct2500 = 'MCT2500',
}

export enum Enum_Inventorymeterelectricity_Mounting {
  Cross = 'cross',
  Din = 'din',
}

export enum Enum_Inventorymetergas_Device_Category {
  Membrane = 'membrane',
  Quantometer = 'quantometer',
  Rotary = 'rotary',
  Turbine = 'turbine',
}

export enum Enum_Inventorymetergas_Diameter_Nominal {
  Dn15 = 'DN15',
  Dn20 = 'DN20',
  Dn25 = 'DN25',
  Dn32 = 'DN32',
  Dn40 = 'DN40',
  Dn50 = 'DN50',
  Dn65 = 'DN65',
  Dn80 = 'DN80',
  Dn100 = 'DN100',
  Dn125 = 'DN125',
  Dn150 = 'DN150',
  Dn200 = 'DN200',
}

export enum Enum_Inventorymetergas_G_Size {
  G4 = 'G4',
  G6 = 'G6',
  G10 = 'G10',
  G16 = 'G16',
  G25 = 'G25',
  G40 = 'G40',
  G65 = 'G65',
  G100 = 'G100',
  G160 = 'G160',
  G250 = 'G250',
  G400 = 'G400',
  G650 = 'G650',
  G1000 = 'G1000',
  G1600 = 'G1600',
  G2500 = 'G2500',
  G4000 = 'G4000',
}

export enum Enum_Inventorymetergas_Orientation {
  Horizontal = 'horizontal',
  VerticalFlowDown = 'verticalFlowDown',
  VerticalFlowUp = 'verticalFlowUp',
}

export enum Enum_Inventorymeterheatcold_Diameter_Nominal {
  Dn15 = 'DN15',
  Dn20 = 'DN20',
  Dn25 = 'DN25',
  Dn32 = 'DN32',
  Dn40 = 'DN40',
  Dn50 = 'DN50',
  Dn65 = 'DN65',
  Dn80 = 'DN80',
  Dn100 = 'DN100',
  Dn125 = 'DN125',
  Dn150 = 'DN150',
  Dn200 = 'DN200',
}

export enum Enum_Inventorymeterheatcold_Installation_Position {
  Forward = 'forward',
  Return = 'return',
}

export enum Enum_Inventorymeterheatcold_Orientation {
  Horizontal = 'horizontal',
  VerticalFlowDown = 'verticalFlowDown',
  VerticalFlowUp = 'verticalFlowUp',
}

export enum Enum_Inventorymeterheatcold_Resistance {
  Pt100 = 'pt100',
  Pt500 = 'pt500',
  Pt1000 = 'pt1000',
}

export enum Enum_Inventorymeterother_Device_Category {
  Gateway = 'gateway',
  LoraGateway = 'loraGateway',
  LoraGatewayPowerSupply = 'loraGatewayPowerSupply',
  Thermometer = 'thermometer',
}

export enum Enum_Inventorymeterphoto_Type {
  CablePath = 'cablePath',
  ClosedSensor = 'closedSensor',
  ConnectionDetail = 'connectionDetail',
  Context = 'context',
  Detail = 'detail',
  ImpulseConstant = 'impulseConstant',
  MeterCounter = 'meterCounter',
  OpenSensor = 'openSensor',
  OptoConnection = 'optoConnection',
  PlacementOverview = 'placementOverview',
}

export enum Enum_Inventorymeterwater_Diameter_Nominal {
  Dn15 = 'DN15',
  Dn20 = 'DN20',
  Dn25 = 'DN25',
  Dn32 = 'DN32',
  Dn40 = 'DN40',
  Dn50 = 'DN50',
  Dn65 = 'DN65',
  Dn80 = 'DN80',
  Dn100 = 'DN100',
  Dn125 = 'DN125',
  Dn150 = 'DN150',
  Dn200 = 'DN200',
}

export enum Enum_Inventorymeterwater_Orientation {
  Horizontal = 'horizontal',
  VerticalFlowDown = 'verticalFlowDown',
  VerticalFlowUp = 'verticalFlowUp',
}

export enum Enum_Inventorymeterwater_Tube_Material {
  Copper = 'copper',
  Plastic = 'plastic',
  Steel = 'steel',
}

export enum Enum_Inventorymeter_Meter_Mount_Type {
  Free = 'free',
  GalvanicSeparator = 'galvanicSeparator',
  ImpulseModule = 'impulseModule',
  MbusModule = 'mbusModule',
  RemoteReading = 'remoteReading',
  VolumeConverter = 'volumeConverter',
}

export enum Enum_Inventorymeter_Meter_Type {
  Cold = 'cold',
  Electricity = 'electricity',
  Gas = 'gas',
  Heat = 'heat',
  Other = 'other',
  Water = 'water',
}

export enum Enum_Inventorymeter_Owner_Type {
  Client = 'client',
  Tenant = 'tenant',
  UtilityCompany = 'utilityCompany',
}

export enum Enum_Inventorymeter_Unit {
  Gj = 'GJ',
  Kwh = 'KWH',
  M3 = 'M3',
  Mj = 'MJ',
  Mwh = 'MWH',
  Other = 'OTHER',
}

export enum Enum_Loradevice_Activation_Type {
  Abp = 'ABP',
  Otaa = 'OTAA',
}

export enum Enum_Meteraddon_Category {
  Cable = 'cable',
  GalvanicIsolator = 'galvanicIsolator',
  ImpulseModule = 'impulseModule',
  LoraSensor = 'loraSensor',
  MeterReplacement = 'meterReplacement',
  NbiotSensor = 'nbiotSensor',
  PulseSplitter = 'pulseSplitter',
}

export enum Enum_Metermodel_Meter_Type {
  Cold = 'cold',
  Electricity = 'electricity',
  Gas = 'gas',
  Heat = 'heat',
  Other = 'other',
  Water = 'water',
}

export enum Enum_Revision_Action {
  Create = 'create',
  Delete = 'delete',
  Update = 'update',
}

export enum Enum_Thirdparty_Type {
  Distributor = 'Distributor',
  Supplier = 'Supplier',
}

export type EmissionFactor = {
  __typename?: 'EmissionFactor'
  base_unit?: Maybe<Unit>
  created_at: Scalars['DateTime']
  emission_factor_category?: Maybe<EmissionFactorCategory>
  emission_factor_validities?: Maybe<Array<Maybe<EmissionFactorValidity>>>
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  published_at?: Maybe<Scalars['DateTime']>
  updated_at: Scalars['DateTime']
}

export type EmissionFactorEmission_Factor_ValiditiesArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type EmissionFactorAggregator = {
  __typename?: 'EmissionFactorAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type EmissionFactorCategory = {
  __typename?: 'EmissionFactorCategory'
  created_at: Scalars['DateTime']
  description?: Maybe<Scalars['String']>
  emission_factors?: Maybe<Array<Maybe<EmissionFactor>>>
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  published_at?: Maybe<Scalars['DateTime']>
  scope?: Maybe<Scalars['Int']>
  updated_at: Scalars['DateTime']
}

export type EmissionFactorCategoryEmission_FactorsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type EmissionFactorCategoryAggregator = {
  __typename?: 'EmissionFactorCategoryAggregator'
  avg?: Maybe<EmissionFactorCategoryAggregatorAvg>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<EmissionFactorCategoryAggregatorMax>
  min?: Maybe<EmissionFactorCategoryAggregatorMin>
  sum?: Maybe<EmissionFactorCategoryAggregatorSum>
  totalCount?: Maybe<Scalars['Int']>
}

export type EmissionFactorCategoryAggregatorAvg = {
  __typename?: 'EmissionFactorCategoryAggregatorAvg'
  scope?: Maybe<Scalars['Float']>
}

export type EmissionFactorCategoryAggregatorMax = {
  __typename?: 'EmissionFactorCategoryAggregatorMax'
  scope?: Maybe<Scalars['Float']>
}

export type EmissionFactorCategoryAggregatorMin = {
  __typename?: 'EmissionFactorCategoryAggregatorMin'
  scope?: Maybe<Scalars['Float']>
}

export type EmissionFactorCategoryAggregatorSum = {
  __typename?: 'EmissionFactorCategoryAggregatorSum'
  scope?: Maybe<Scalars['Float']>
}

export type EmissionFactorCategoryConnection = {
  __typename?: 'EmissionFactorCategoryConnection'
  aggregate?: Maybe<EmissionFactorCategoryAggregator>
  groupBy?: Maybe<EmissionFactorCategoryGroupBy>
  values?: Maybe<Array<Maybe<EmissionFactorCategory>>>
}

export type EmissionFactorCategoryConnectionCreated_At = {
  __typename?: 'EmissionFactorCategoryConnectionCreated_at'
  connection?: Maybe<EmissionFactorCategoryConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type EmissionFactorCategoryConnectionDescription = {
  __typename?: 'EmissionFactorCategoryConnectionDescription'
  connection?: Maybe<EmissionFactorCategoryConnection>
  key?: Maybe<Scalars['String']>
}

export type EmissionFactorCategoryConnectionId = {
  __typename?: 'EmissionFactorCategoryConnectionId'
  connection?: Maybe<EmissionFactorCategoryConnection>
  key?: Maybe<Scalars['ID']>
}

export type EmissionFactorCategoryConnectionName = {
  __typename?: 'EmissionFactorCategoryConnectionName'
  connection?: Maybe<EmissionFactorCategoryConnection>
  key?: Maybe<Scalars['String']>
}

export type EmissionFactorCategoryConnectionPublished_At = {
  __typename?: 'EmissionFactorCategoryConnectionPublished_at'
  connection?: Maybe<EmissionFactorCategoryConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type EmissionFactorCategoryConnectionScope = {
  __typename?: 'EmissionFactorCategoryConnectionScope'
  connection?: Maybe<EmissionFactorCategoryConnection>
  key?: Maybe<Scalars['Int']>
}

export type EmissionFactorCategoryConnectionUpdated_At = {
  __typename?: 'EmissionFactorCategoryConnectionUpdated_at'
  connection?: Maybe<EmissionFactorCategoryConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type EmissionFactorCategoryGroupBy = {
  __typename?: 'EmissionFactorCategoryGroupBy'
  created_at?: Maybe<Array<Maybe<EmissionFactorCategoryConnectionCreated_At>>>
  description?: Maybe<Array<Maybe<EmissionFactorCategoryConnectionDescription>>>
  id?: Maybe<Array<Maybe<EmissionFactorCategoryConnectionId>>>
  name?: Maybe<Array<Maybe<EmissionFactorCategoryConnectionName>>>
  published_at?: Maybe<Array<Maybe<EmissionFactorCategoryConnectionPublished_At>>>
  scope?: Maybe<Array<Maybe<EmissionFactorCategoryConnectionScope>>>
  updated_at?: Maybe<Array<Maybe<EmissionFactorCategoryConnectionUpdated_At>>>
}

export type EmissionFactorCategoryInput = {
  created_by?: InputMaybe<Scalars['ID']>
  description?: InputMaybe<Scalars['String']>
  emission_factors?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  name?: InputMaybe<Scalars['String']>
  published_at?: InputMaybe<Scalars['DateTime']>
  scope?: InputMaybe<Scalars['Int']>
  updated_by?: InputMaybe<Scalars['ID']>
}

export type EmissionFactorConnection = {
  __typename?: 'EmissionFactorConnection'
  aggregate?: Maybe<EmissionFactorAggregator>
  groupBy?: Maybe<EmissionFactorGroupBy>
  values?: Maybe<Array<Maybe<EmissionFactor>>>
}

export type EmissionFactorConnectionBase_Unit = {
  __typename?: 'EmissionFactorConnectionBase_unit'
  connection?: Maybe<EmissionFactorConnection>
  key?: Maybe<Scalars['ID']>
}

export type EmissionFactorConnectionCreated_At = {
  __typename?: 'EmissionFactorConnectionCreated_at'
  connection?: Maybe<EmissionFactorConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type EmissionFactorConnectionEmission_Factor_Category = {
  __typename?: 'EmissionFactorConnectionEmission_factor_category'
  connection?: Maybe<EmissionFactorConnection>
  key?: Maybe<Scalars['ID']>
}

export type EmissionFactorConnectionId = {
  __typename?: 'EmissionFactorConnectionId'
  connection?: Maybe<EmissionFactorConnection>
  key?: Maybe<Scalars['ID']>
}

export type EmissionFactorConnectionName = {
  __typename?: 'EmissionFactorConnectionName'
  connection?: Maybe<EmissionFactorConnection>
  key?: Maybe<Scalars['String']>
}

export type EmissionFactorConnectionPublished_At = {
  __typename?: 'EmissionFactorConnectionPublished_at'
  connection?: Maybe<EmissionFactorConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type EmissionFactorConnectionUpdated_At = {
  __typename?: 'EmissionFactorConnectionUpdated_at'
  connection?: Maybe<EmissionFactorConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type EmissionFactorGroupBy = {
  __typename?: 'EmissionFactorGroupBy'
  base_unit?: Maybe<Array<Maybe<EmissionFactorConnectionBase_Unit>>>
  created_at?: Maybe<Array<Maybe<EmissionFactorConnectionCreated_At>>>
  emission_factor_category?: Maybe<Array<Maybe<EmissionFactorConnectionEmission_Factor_Category>>>
  id?: Maybe<Array<Maybe<EmissionFactorConnectionId>>>
  name?: Maybe<Array<Maybe<EmissionFactorConnectionName>>>
  published_at?: Maybe<Array<Maybe<EmissionFactorConnectionPublished_At>>>
  updated_at?: Maybe<Array<Maybe<EmissionFactorConnectionUpdated_At>>>
}

export type EmissionFactorInput = {
  base_unit?: InputMaybe<Scalars['ID']>
  created_by?: InputMaybe<Scalars['ID']>
  emission_factor_category?: InputMaybe<Scalars['ID']>
  emission_factor_validities?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  name?: InputMaybe<Scalars['String']>
  published_at?: InputMaybe<Scalars['DateTime']>
  updated_by?: InputMaybe<Scalars['ID']>
}

export type EmissionFactorValidity = {
  __typename?: 'EmissionFactorValidity'
  CO2eq?: Maybe<Scalars['Float']>
  country?: Maybe<Country>
  created_at: Scalars['DateTime']
  emission_factor?: Maybe<EmissionFactor>
  id: Scalars['ID']
  published_at?: Maybe<Scalars['DateTime']>
  source?: Maybe<Scalars['String']>
  updated_at: Scalars['DateTime']
  valid_from?: Maybe<Scalars['Date']>
  valid_to?: Maybe<Scalars['Date']>
}

export type EmissionFactorValidityAggregator = {
  __typename?: 'EmissionFactorValidityAggregator'
  avg?: Maybe<EmissionFactorValidityAggregatorAvg>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<EmissionFactorValidityAggregatorMax>
  min?: Maybe<EmissionFactorValidityAggregatorMin>
  sum?: Maybe<EmissionFactorValidityAggregatorSum>
  totalCount?: Maybe<Scalars['Int']>
}

export type EmissionFactorValidityAggregatorAvg = {
  __typename?: 'EmissionFactorValidityAggregatorAvg'
  CO2eq?: Maybe<Scalars['Float']>
}

export type EmissionFactorValidityAggregatorMax = {
  __typename?: 'EmissionFactorValidityAggregatorMax'
  CO2eq?: Maybe<Scalars['Float']>
}

export type EmissionFactorValidityAggregatorMin = {
  __typename?: 'EmissionFactorValidityAggregatorMin'
  CO2eq?: Maybe<Scalars['Float']>
}

export type EmissionFactorValidityAggregatorSum = {
  __typename?: 'EmissionFactorValidityAggregatorSum'
  CO2eq?: Maybe<Scalars['Float']>
}

export type EmissionFactorValidityConnection = {
  __typename?: 'EmissionFactorValidityConnection'
  aggregate?: Maybe<EmissionFactorValidityAggregator>
  groupBy?: Maybe<EmissionFactorValidityGroupBy>
  values?: Maybe<Array<Maybe<EmissionFactorValidity>>>
}

export type EmissionFactorValidityConnectionCo2eq = {
  __typename?: 'EmissionFactorValidityConnectionCO2eq'
  connection?: Maybe<EmissionFactorValidityConnection>
  key?: Maybe<Scalars['Float']>
}

export type EmissionFactorValidityConnectionCountry = {
  __typename?: 'EmissionFactorValidityConnectionCountry'
  connection?: Maybe<EmissionFactorValidityConnection>
  key?: Maybe<Scalars['ID']>
}

export type EmissionFactorValidityConnectionCreated_At = {
  __typename?: 'EmissionFactorValidityConnectionCreated_at'
  connection?: Maybe<EmissionFactorValidityConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type EmissionFactorValidityConnectionEmission_Factor = {
  __typename?: 'EmissionFactorValidityConnectionEmission_factor'
  connection?: Maybe<EmissionFactorValidityConnection>
  key?: Maybe<Scalars['ID']>
}

export type EmissionFactorValidityConnectionId = {
  __typename?: 'EmissionFactorValidityConnectionId'
  connection?: Maybe<EmissionFactorValidityConnection>
  key?: Maybe<Scalars['ID']>
}

export type EmissionFactorValidityConnectionPublished_At = {
  __typename?: 'EmissionFactorValidityConnectionPublished_at'
  connection?: Maybe<EmissionFactorValidityConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type EmissionFactorValidityConnectionSource = {
  __typename?: 'EmissionFactorValidityConnectionSource'
  connection?: Maybe<EmissionFactorValidityConnection>
  key?: Maybe<Scalars['String']>
}

export type EmissionFactorValidityConnectionUpdated_At = {
  __typename?: 'EmissionFactorValidityConnectionUpdated_at'
  connection?: Maybe<EmissionFactorValidityConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type EmissionFactorValidityConnectionValid_From = {
  __typename?: 'EmissionFactorValidityConnectionValid_from'
  connection?: Maybe<EmissionFactorValidityConnection>
  key?: Maybe<Scalars['ID']>
}

export type EmissionFactorValidityConnectionValid_To = {
  __typename?: 'EmissionFactorValidityConnectionValid_to'
  connection?: Maybe<EmissionFactorValidityConnection>
  key?: Maybe<Scalars['ID']>
}

export type EmissionFactorValidityGroupBy = {
  __typename?: 'EmissionFactorValidityGroupBy'
  CO2eq?: Maybe<Array<Maybe<EmissionFactorValidityConnectionCo2eq>>>
  country?: Maybe<Array<Maybe<EmissionFactorValidityConnectionCountry>>>
  created_at?: Maybe<Array<Maybe<EmissionFactorValidityConnectionCreated_At>>>
  emission_factor?: Maybe<Array<Maybe<EmissionFactorValidityConnectionEmission_Factor>>>
  id?: Maybe<Array<Maybe<EmissionFactorValidityConnectionId>>>
  published_at?: Maybe<Array<Maybe<EmissionFactorValidityConnectionPublished_At>>>
  source?: Maybe<Array<Maybe<EmissionFactorValidityConnectionSource>>>
  updated_at?: Maybe<Array<Maybe<EmissionFactorValidityConnectionUpdated_At>>>
  valid_from?: Maybe<Array<Maybe<EmissionFactorValidityConnectionValid_From>>>
  valid_to?: Maybe<Array<Maybe<EmissionFactorValidityConnectionValid_To>>>
}

export type EmissionFactorValidityInput = {
  CO2eq?: InputMaybe<Scalars['Float']>
  country?: InputMaybe<Scalars['ID']>
  created_by?: InputMaybe<Scalars['ID']>
  emission_factor?: InputMaybe<Scalars['ID']>
  published_at?: InputMaybe<Scalars['DateTime']>
  source?: InputMaybe<Scalars['String']>
  updated_by?: InputMaybe<Scalars['ID']>
  valid_from?: InputMaybe<Scalars['Date']>
  valid_to?: InputMaybe<Scalars['Date']>
}

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>
  caption?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
}

export type FileInput = {
  alternativeText?: InputMaybe<Scalars['String']>
  caption?: InputMaybe<Scalars['String']>
  created_by?: InputMaybe<Scalars['ID']>
  ext?: InputMaybe<Scalars['String']>
  formats?: InputMaybe<Scalars['JSON']>
  hash: Scalars['String']
  height?: InputMaybe<Scalars['Int']>
  mime: Scalars['String']
  name: Scalars['String']
  previewUrl?: InputMaybe<Scalars['String']>
  provider: Scalars['String']
  provider_metadata?: InputMaybe<Scalars['JSON']>
  related?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  size: Scalars['Float']
  updated_by?: InputMaybe<Scalars['ID']>
  url: Scalars['String']
  width?: InputMaybe<Scalars['Int']>
}

export type FloorplanMetersByBuilding = {
  __typename?: 'FloorplanMetersByBuilding'
  floor?: Maybe<Scalars['Int']>
  inventory_location_building_floorplan_id?: Maybe<Scalars['ID']>
  inventory_location_building_id?: Maybe<Scalars['ID']>
  inventory_location_building_name?: Maybe<Scalars['String']>
  meter_count?: Maybe<Scalars['Int']>
}

export type I18NLocale = {
  __typename?: 'I18NLocale'
  code?: Maybe<Scalars['String']>
  created_at: Scalars['DateTime']
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  updated_at: Scalars['DateTime']
}

export type InputId = {
  id: Scalars['ID']
}

export type Inventory = {
  __typename?: 'Inventory'
  backend_gateway_customer_id?: Maybe<Scalars['String']>
  checkpoints?: Maybe<Array<Maybe<Checkpoint>>>
  created_at: Scalars['DateTime']
  folder_drive_id?: Maybe<Scalars['String']>
  id: Scalars['ID']
  inventory_locations?: Maybe<Array<Maybe<InventoryLocation>>>
  name?: Maybe<Scalars['String']>
  note?: Maybe<Scalars['String']>
  updated_at: Scalars['DateTime']
}

export type InventoryCheckpointsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type InventoryInventory_LocationsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type InventoryAggregator = {
  __typename?: 'InventoryAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type InventoryConnection = {
  __typename?: 'InventoryConnection'
  aggregate?: Maybe<InventoryAggregator>
  groupBy?: Maybe<InventoryGroupBy>
  values?: Maybe<Array<Maybe<Inventory>>>
}

export type InventoryConnectionBackend_Gateway_Customer_Id = {
  __typename?: 'InventoryConnectionBackend_gateway_customer_id'
  connection?: Maybe<InventoryConnection>
  key?: Maybe<Scalars['String']>
}

export type InventoryConnectionCreated_At = {
  __typename?: 'InventoryConnectionCreated_at'
  connection?: Maybe<InventoryConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type InventoryConnectionFolder_Drive_Id = {
  __typename?: 'InventoryConnectionFolder_drive_id'
  connection?: Maybe<InventoryConnection>
  key?: Maybe<Scalars['String']>
}

export type InventoryConnectionId = {
  __typename?: 'InventoryConnectionId'
  connection?: Maybe<InventoryConnection>
  key?: Maybe<Scalars['ID']>
}

export type InventoryConnectionName = {
  __typename?: 'InventoryConnectionName'
  connection?: Maybe<InventoryConnection>
  key?: Maybe<Scalars['String']>
}

export type InventoryConnectionNote = {
  __typename?: 'InventoryConnectionNote'
  connection?: Maybe<InventoryConnection>
  key?: Maybe<Scalars['String']>
}

export type InventoryConnectionUpdated_At = {
  __typename?: 'InventoryConnectionUpdated_at'
  connection?: Maybe<InventoryConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type InventoryGroupBy = {
  __typename?: 'InventoryGroupBy'
  backend_gateway_customer_id?: Maybe<Array<Maybe<InventoryConnectionBackend_Gateway_Customer_Id>>>
  created_at?: Maybe<Array<Maybe<InventoryConnectionCreated_At>>>
  folder_drive_id?: Maybe<Array<Maybe<InventoryConnectionFolder_Drive_Id>>>
  id?: Maybe<Array<Maybe<InventoryConnectionId>>>
  name?: Maybe<Array<Maybe<InventoryConnectionName>>>
  note?: Maybe<Array<Maybe<InventoryConnectionNote>>>
  updated_at?: Maybe<Array<Maybe<InventoryConnectionUpdated_At>>>
}

export type InventoryInput = {
  backend_gateway_customer_id?: InputMaybe<Scalars['String']>
  checkpoints?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  created_by?: InputMaybe<Scalars['ID']>
  folder_drive_id?: InputMaybe<Scalars['String']>
  inventory_locations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  name?: InputMaybe<Scalars['String']>
  note?: InputMaybe<Scalars['String']>
  updated_by?: InputMaybe<Scalars['ID']>
}

export type InventoryLocation = {
  __typename?: 'InventoryLocation'
  address?: Maybe<Scalars['String']>
  api_key?: Maybe<Scalars['String']>
  avatar_url?: Maybe<Scalars['String']>
  backend_gateway_customer_id?: Maybe<Scalars['String']>
  backend_gateway_establishment_id?: Maybe<Scalars['String']>
  created_at: Scalars['DateTime']
  folder_drive_id?: Maybe<Scalars['String']>
  id: Scalars['ID']
  inventory?: Maybe<Inventory>
  inventory_location_buildings?: Maybe<Array<Maybe<InventoryLocationBuilding>>>
  inventory_location_orders?: Maybe<Array<Maybe<InventoryLocationOrder>>>
  inventory_meters?: Maybe<Array<Maybe<InventoryMeter>>>
  lat?: Maybe<Scalars['Float']>
  lng?: Maybe<Scalars['Float']>
  name?: Maybe<Scalars['String']>
  updated_at: Scalars['DateTime']
}

export type InventoryLocationInventory_Location_BuildingsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type InventoryLocationInventory_Location_OrdersArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type InventoryLocationInventory_MetersArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type InventoryLocationAggregator = {
  __typename?: 'InventoryLocationAggregator'
  avg?: Maybe<InventoryLocationAggregatorAvg>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<InventoryLocationAggregatorMax>
  min?: Maybe<InventoryLocationAggregatorMin>
  sum?: Maybe<InventoryLocationAggregatorSum>
  totalCount?: Maybe<Scalars['Int']>
}

export type InventoryLocationAggregatorAvg = {
  __typename?: 'InventoryLocationAggregatorAvg'
  lat?: Maybe<Scalars['Float']>
  lng?: Maybe<Scalars['Float']>
}

export type InventoryLocationAggregatorMax = {
  __typename?: 'InventoryLocationAggregatorMax'
  lat?: Maybe<Scalars['Float']>
  lng?: Maybe<Scalars['Float']>
}

export type InventoryLocationAggregatorMin = {
  __typename?: 'InventoryLocationAggregatorMin'
  lat?: Maybe<Scalars['Float']>
  lng?: Maybe<Scalars['Float']>
}

export type InventoryLocationAggregatorSum = {
  __typename?: 'InventoryLocationAggregatorSum'
  lat?: Maybe<Scalars['Float']>
  lng?: Maybe<Scalars['Float']>
}

export type InventoryLocationBuilding = {
  __typename?: 'InventoryLocationBuilding'
  address?: Maybe<Scalars['String']>
  area?: Maybe<Scalars['Int']>
  backend_gateway_establishment_id?: Maybe<Scalars['String']>
  code?: Maybe<Scalars['String']>
  created_at: Scalars['DateTime']
  extra?: Maybe<Scalars['JSON']>
  id: Scalars['ID']
  inventory_location?: Maybe<InventoryLocation>
  inventory_location_building_floorplans?: Maybe<Array<Maybe<InventoryLocationBuildingFloorplan>>>
  inventory_meters?: Maybe<Array<Maybe<InventoryMeter>>>
  name?: Maybe<Scalars['String']>
  tags?: Maybe<Scalars['JSON']>
  updated_at: Scalars['DateTime']
}

export type InventoryLocationBuildingInventory_Location_Building_FloorplansArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type InventoryLocationBuildingInventory_MetersArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type InventoryLocationBuildingAggregator = {
  __typename?: 'InventoryLocationBuildingAggregator'
  avg?: Maybe<InventoryLocationBuildingAggregatorAvg>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<InventoryLocationBuildingAggregatorMax>
  min?: Maybe<InventoryLocationBuildingAggregatorMin>
  sum?: Maybe<InventoryLocationBuildingAggregatorSum>
  totalCount?: Maybe<Scalars['Int']>
}

export type InventoryLocationBuildingAggregatorAvg = {
  __typename?: 'InventoryLocationBuildingAggregatorAvg'
  area?: Maybe<Scalars['Float']>
}

export type InventoryLocationBuildingAggregatorMax = {
  __typename?: 'InventoryLocationBuildingAggregatorMax'
  area?: Maybe<Scalars['Float']>
}

export type InventoryLocationBuildingAggregatorMin = {
  __typename?: 'InventoryLocationBuildingAggregatorMin'
  area?: Maybe<Scalars['Float']>
}

export type InventoryLocationBuildingAggregatorSum = {
  __typename?: 'InventoryLocationBuildingAggregatorSum'
  area?: Maybe<Scalars['Float']>
}

export type InventoryLocationBuildingConnection = {
  __typename?: 'InventoryLocationBuildingConnection'
  aggregate?: Maybe<InventoryLocationBuildingAggregator>
  groupBy?: Maybe<InventoryLocationBuildingGroupBy>
  values?: Maybe<Array<Maybe<InventoryLocationBuilding>>>
}

export type InventoryLocationBuildingConnectionAddress = {
  __typename?: 'InventoryLocationBuildingConnectionAddress'
  connection?: Maybe<InventoryLocationBuildingConnection>
  key?: Maybe<Scalars['String']>
}

export type InventoryLocationBuildingConnectionArea = {
  __typename?: 'InventoryLocationBuildingConnectionArea'
  connection?: Maybe<InventoryLocationBuildingConnection>
  key?: Maybe<Scalars['Int']>
}

export type InventoryLocationBuildingConnectionBackend_Gateway_Establishment_Id = {
  __typename?: 'InventoryLocationBuildingConnectionBackend_gateway_establishment_id'
  connection?: Maybe<InventoryLocationBuildingConnection>
  key?: Maybe<Scalars['String']>
}

export type InventoryLocationBuildingConnectionCode = {
  __typename?: 'InventoryLocationBuildingConnectionCode'
  connection?: Maybe<InventoryLocationBuildingConnection>
  key?: Maybe<Scalars['String']>
}

export type InventoryLocationBuildingConnectionCreated_At = {
  __typename?: 'InventoryLocationBuildingConnectionCreated_at'
  connection?: Maybe<InventoryLocationBuildingConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type InventoryLocationBuildingConnectionExtra = {
  __typename?: 'InventoryLocationBuildingConnectionExtra'
  connection?: Maybe<InventoryLocationBuildingConnection>
  key?: Maybe<Scalars['JSON']>
}

export type InventoryLocationBuildingConnectionId = {
  __typename?: 'InventoryLocationBuildingConnectionId'
  connection?: Maybe<InventoryLocationBuildingConnection>
  key?: Maybe<Scalars['ID']>
}

export type InventoryLocationBuildingConnectionInventory_Location = {
  __typename?: 'InventoryLocationBuildingConnectionInventory_location'
  connection?: Maybe<InventoryLocationBuildingConnection>
  key?: Maybe<Scalars['ID']>
}

export type InventoryLocationBuildingConnectionName = {
  __typename?: 'InventoryLocationBuildingConnectionName'
  connection?: Maybe<InventoryLocationBuildingConnection>
  key?: Maybe<Scalars['String']>
}

export type InventoryLocationBuildingConnectionTags = {
  __typename?: 'InventoryLocationBuildingConnectionTags'
  connection?: Maybe<InventoryLocationBuildingConnection>
  key?: Maybe<Scalars['JSON']>
}

export type InventoryLocationBuildingConnectionUpdated_At = {
  __typename?: 'InventoryLocationBuildingConnectionUpdated_at'
  connection?: Maybe<InventoryLocationBuildingConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type InventoryLocationBuildingFloorplan = {
  __typename?: 'InventoryLocationBuildingFloorplan'
  created_at: Scalars['DateTime']
  file_drive_id?: Maybe<Scalars['String']>
  floor: Scalars['Int']
  height?: Maybe<Scalars['Int']>
  id: Scalars['ID']
  inventory_location_building?: Maybe<InventoryLocationBuilding>
  updated_at: Scalars['DateTime']
  width?: Maybe<Scalars['Int']>
}

export type InventoryLocationBuildingFloorplanAggregator = {
  __typename?: 'InventoryLocationBuildingFloorplanAggregator'
  avg?: Maybe<InventoryLocationBuildingFloorplanAggregatorAvg>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<InventoryLocationBuildingFloorplanAggregatorMax>
  min?: Maybe<InventoryLocationBuildingFloorplanAggregatorMin>
  sum?: Maybe<InventoryLocationBuildingFloorplanAggregatorSum>
  totalCount?: Maybe<Scalars['Int']>
}

export type InventoryLocationBuildingFloorplanAggregatorAvg = {
  __typename?: 'InventoryLocationBuildingFloorplanAggregatorAvg'
  floor?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
}

export type InventoryLocationBuildingFloorplanAggregatorMax = {
  __typename?: 'InventoryLocationBuildingFloorplanAggregatorMax'
  floor?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
}

export type InventoryLocationBuildingFloorplanAggregatorMin = {
  __typename?: 'InventoryLocationBuildingFloorplanAggregatorMin'
  floor?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
}

export type InventoryLocationBuildingFloorplanAggregatorSum = {
  __typename?: 'InventoryLocationBuildingFloorplanAggregatorSum'
  floor?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
}

export type InventoryLocationBuildingFloorplanConnection = {
  __typename?: 'InventoryLocationBuildingFloorplanConnection'
  aggregate?: Maybe<InventoryLocationBuildingFloorplanAggregator>
  groupBy?: Maybe<InventoryLocationBuildingFloorplanGroupBy>
  values?: Maybe<Array<Maybe<InventoryLocationBuildingFloorplan>>>
}

export type InventoryLocationBuildingFloorplanConnectionCreated_At = {
  __typename?: 'InventoryLocationBuildingFloorplanConnectionCreated_at'
  connection?: Maybe<InventoryLocationBuildingFloorplanConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type InventoryLocationBuildingFloorplanConnectionFile_Drive_Id = {
  __typename?: 'InventoryLocationBuildingFloorplanConnectionFile_drive_id'
  connection?: Maybe<InventoryLocationBuildingFloorplanConnection>
  key?: Maybe<Scalars['String']>
}

export type InventoryLocationBuildingFloorplanConnectionFloor = {
  __typename?: 'InventoryLocationBuildingFloorplanConnectionFloor'
  connection?: Maybe<InventoryLocationBuildingFloorplanConnection>
  key?: Maybe<Scalars['Int']>
}

export type InventoryLocationBuildingFloorplanConnectionHeight = {
  __typename?: 'InventoryLocationBuildingFloorplanConnectionHeight'
  connection?: Maybe<InventoryLocationBuildingFloorplanConnection>
  key?: Maybe<Scalars['Int']>
}

export type InventoryLocationBuildingFloorplanConnectionId = {
  __typename?: 'InventoryLocationBuildingFloorplanConnectionId'
  connection?: Maybe<InventoryLocationBuildingFloorplanConnection>
  key?: Maybe<Scalars['ID']>
}

export type InventoryLocationBuildingFloorplanConnectionInventory_Location_Building = {
  __typename?: 'InventoryLocationBuildingFloorplanConnectionInventory_location_building'
  connection?: Maybe<InventoryLocationBuildingFloorplanConnection>
  key?: Maybe<Scalars['ID']>
}

export type InventoryLocationBuildingFloorplanConnectionUpdated_At = {
  __typename?: 'InventoryLocationBuildingFloorplanConnectionUpdated_at'
  connection?: Maybe<InventoryLocationBuildingFloorplanConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type InventoryLocationBuildingFloorplanConnectionWidth = {
  __typename?: 'InventoryLocationBuildingFloorplanConnectionWidth'
  connection?: Maybe<InventoryLocationBuildingFloorplanConnection>
  key?: Maybe<Scalars['Int']>
}

export type InventoryLocationBuildingFloorplanGroupBy = {
  __typename?: 'InventoryLocationBuildingFloorplanGroupBy'
  created_at?: Maybe<Array<Maybe<InventoryLocationBuildingFloorplanConnectionCreated_At>>>
  file_drive_id?: Maybe<Array<Maybe<InventoryLocationBuildingFloorplanConnectionFile_Drive_Id>>>
  floor?: Maybe<Array<Maybe<InventoryLocationBuildingFloorplanConnectionFloor>>>
  height?: Maybe<Array<Maybe<InventoryLocationBuildingFloorplanConnectionHeight>>>
  id?: Maybe<Array<Maybe<InventoryLocationBuildingFloorplanConnectionId>>>
  inventory_location_building?: Maybe<
    Array<Maybe<InventoryLocationBuildingFloorplanConnectionInventory_Location_Building>>
  >
  updated_at?: Maybe<Array<Maybe<InventoryLocationBuildingFloorplanConnectionUpdated_At>>>
  width?: Maybe<Array<Maybe<InventoryLocationBuildingFloorplanConnectionWidth>>>
}

export type InventoryLocationBuildingFloorplanInput = {
  created_by?: InputMaybe<Scalars['ID']>
  file_drive_id?: InputMaybe<Scalars['String']>
  floor: Scalars['Int']
  height?: InputMaybe<Scalars['Int']>
  inventory_location_building?: InputMaybe<Scalars['ID']>
  updated_by?: InputMaybe<Scalars['ID']>
  width?: InputMaybe<Scalars['Int']>
}

export type InventoryLocationBuildingGroupBy = {
  __typename?: 'InventoryLocationBuildingGroupBy'
  address?: Maybe<Array<Maybe<InventoryLocationBuildingConnectionAddress>>>
  area?: Maybe<Array<Maybe<InventoryLocationBuildingConnectionArea>>>
  backend_gateway_establishment_id?: Maybe<
    Array<Maybe<InventoryLocationBuildingConnectionBackend_Gateway_Establishment_Id>>
  >
  code?: Maybe<Array<Maybe<InventoryLocationBuildingConnectionCode>>>
  created_at?: Maybe<Array<Maybe<InventoryLocationBuildingConnectionCreated_At>>>
  extra?: Maybe<Array<Maybe<InventoryLocationBuildingConnectionExtra>>>
  id?: Maybe<Array<Maybe<InventoryLocationBuildingConnectionId>>>
  inventory_location?: Maybe<Array<Maybe<InventoryLocationBuildingConnectionInventory_Location>>>
  name?: Maybe<Array<Maybe<InventoryLocationBuildingConnectionName>>>
  tags?: Maybe<Array<Maybe<InventoryLocationBuildingConnectionTags>>>
  updated_at?: Maybe<Array<Maybe<InventoryLocationBuildingConnectionUpdated_At>>>
}

export type InventoryLocationBuildingInput = {
  address?: InputMaybe<Scalars['String']>
  area?: InputMaybe<Scalars['Int']>
  backend_gateway_establishment_id?: InputMaybe<Scalars['String']>
  code?: InputMaybe<Scalars['String']>
  created_by?: InputMaybe<Scalars['ID']>
  extra?: InputMaybe<Scalars['JSON']>
  inventory_location?: InputMaybe<Scalars['ID']>
  inventory_location_building_floorplans?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  inventory_meters?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  name?: InputMaybe<Scalars['String']>
  tags?: InputMaybe<Scalars['JSON']>
  updated_by?: InputMaybe<Scalars['ID']>
}

export type InventoryLocationConnection = {
  __typename?: 'InventoryLocationConnection'
  aggregate?: Maybe<InventoryLocationAggregator>
  groupBy?: Maybe<InventoryLocationGroupBy>
  values?: Maybe<Array<Maybe<InventoryLocation>>>
}

export type InventoryLocationConnectionAddress = {
  __typename?: 'InventoryLocationConnectionAddress'
  connection?: Maybe<InventoryLocationConnection>
  key?: Maybe<Scalars['String']>
}

export type InventoryLocationConnectionApi_Key = {
  __typename?: 'InventoryLocationConnectionApi_key'
  connection?: Maybe<InventoryLocationConnection>
  key?: Maybe<Scalars['String']>
}

export type InventoryLocationConnectionAvatar_Url = {
  __typename?: 'InventoryLocationConnectionAvatar_url'
  connection?: Maybe<InventoryLocationConnection>
  key?: Maybe<Scalars['String']>
}

export type InventoryLocationConnectionBackend_Gateway_Customer_Id = {
  __typename?: 'InventoryLocationConnectionBackend_gateway_customer_id'
  connection?: Maybe<InventoryLocationConnection>
  key?: Maybe<Scalars['String']>
}

export type InventoryLocationConnectionBackend_Gateway_Establishment_Id = {
  __typename?: 'InventoryLocationConnectionBackend_gateway_establishment_id'
  connection?: Maybe<InventoryLocationConnection>
  key?: Maybe<Scalars['String']>
}

export type InventoryLocationConnectionCreated_At = {
  __typename?: 'InventoryLocationConnectionCreated_at'
  connection?: Maybe<InventoryLocationConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type InventoryLocationConnectionFolder_Drive_Id = {
  __typename?: 'InventoryLocationConnectionFolder_drive_id'
  connection?: Maybe<InventoryLocationConnection>
  key?: Maybe<Scalars['String']>
}

export type InventoryLocationConnectionId = {
  __typename?: 'InventoryLocationConnectionId'
  connection?: Maybe<InventoryLocationConnection>
  key?: Maybe<Scalars['ID']>
}

export type InventoryLocationConnectionInventory = {
  __typename?: 'InventoryLocationConnectionInventory'
  connection?: Maybe<InventoryLocationConnection>
  key?: Maybe<Scalars['ID']>
}

export type InventoryLocationConnectionLat = {
  __typename?: 'InventoryLocationConnectionLat'
  connection?: Maybe<InventoryLocationConnection>
  key?: Maybe<Scalars['Float']>
}

export type InventoryLocationConnectionLng = {
  __typename?: 'InventoryLocationConnectionLng'
  connection?: Maybe<InventoryLocationConnection>
  key?: Maybe<Scalars['Float']>
}

export type InventoryLocationConnectionName = {
  __typename?: 'InventoryLocationConnectionName'
  connection?: Maybe<InventoryLocationConnection>
  key?: Maybe<Scalars['String']>
}

export type InventoryLocationConnectionUpdated_At = {
  __typename?: 'InventoryLocationConnectionUpdated_at'
  connection?: Maybe<InventoryLocationConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type InventoryLocationGroupBy = {
  __typename?: 'InventoryLocationGroupBy'
  address?: Maybe<Array<Maybe<InventoryLocationConnectionAddress>>>
  api_key?: Maybe<Array<Maybe<InventoryLocationConnectionApi_Key>>>
  avatar_url?: Maybe<Array<Maybe<InventoryLocationConnectionAvatar_Url>>>
  backend_gateway_customer_id?: Maybe<
    Array<Maybe<InventoryLocationConnectionBackend_Gateway_Customer_Id>>
  >
  backend_gateway_establishment_id?: Maybe<
    Array<Maybe<InventoryLocationConnectionBackend_Gateway_Establishment_Id>>
  >
  created_at?: Maybe<Array<Maybe<InventoryLocationConnectionCreated_At>>>
  folder_drive_id?: Maybe<Array<Maybe<InventoryLocationConnectionFolder_Drive_Id>>>
  id?: Maybe<Array<Maybe<InventoryLocationConnectionId>>>
  inventory?: Maybe<Array<Maybe<InventoryLocationConnectionInventory>>>
  lat?: Maybe<Array<Maybe<InventoryLocationConnectionLat>>>
  lng?: Maybe<Array<Maybe<InventoryLocationConnectionLng>>>
  name?: Maybe<Array<Maybe<InventoryLocationConnectionName>>>
  updated_at?: Maybe<Array<Maybe<InventoryLocationConnectionUpdated_At>>>
}

export type InventoryLocationInput = {
  address?: InputMaybe<Scalars['String']>
  api_key?: InputMaybe<Scalars['String']>
  avatar_url?: InputMaybe<Scalars['String']>
  backend_gateway_customer_id?: InputMaybe<Scalars['String']>
  backend_gateway_establishment_id?: InputMaybe<Scalars['String']>
  created_by?: InputMaybe<Scalars['ID']>
  folder_drive_id?: InputMaybe<Scalars['String']>
  inventory?: InputMaybe<Scalars['ID']>
  inventory_location_buildings?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  inventory_location_orders?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  inventory_meters?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  lat?: InputMaybe<Scalars['Float']>
  lng?: InputMaybe<Scalars['Float']>
  name?: InputMaybe<Scalars['String']>
  updated_by?: InputMaybe<Scalars['ID']>
}

export type InventoryLocationOrder = {
  __typename?: 'InventoryLocationOrder'
  admin_user?: Maybe<AdminUser>
  created_at: Scalars['DateTime']
  id: Scalars['ID']
  inventory_location?: Maybe<InventoryLocation>
  inventory_meter?: Maybe<InventoryMeter>
  meter_addon?: Maybe<MeterAddon>
  quantity?: Maybe<Scalars['Float']>
  updated_at: Scalars['DateTime']
}

export type InventoryLocationOrderAggregator = {
  __typename?: 'InventoryLocationOrderAggregator'
  avg?: Maybe<InventoryLocationOrderAggregatorAvg>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<InventoryLocationOrderAggregatorMax>
  min?: Maybe<InventoryLocationOrderAggregatorMin>
  sum?: Maybe<InventoryLocationOrderAggregatorSum>
  totalCount?: Maybe<Scalars['Int']>
}

export type InventoryLocationOrderAggregatorAvg = {
  __typename?: 'InventoryLocationOrderAggregatorAvg'
  quantity?: Maybe<Scalars['Float']>
}

export type InventoryLocationOrderAggregatorMax = {
  __typename?: 'InventoryLocationOrderAggregatorMax'
  quantity?: Maybe<Scalars['Float']>
}

export type InventoryLocationOrderAggregatorMin = {
  __typename?: 'InventoryLocationOrderAggregatorMin'
  quantity?: Maybe<Scalars['Float']>
}

export type InventoryLocationOrderAggregatorSum = {
  __typename?: 'InventoryLocationOrderAggregatorSum'
  quantity?: Maybe<Scalars['Float']>
}

export type InventoryLocationOrderConnection = {
  __typename?: 'InventoryLocationOrderConnection'
  aggregate?: Maybe<InventoryLocationOrderAggregator>
  groupBy?: Maybe<InventoryLocationOrderGroupBy>
  values?: Maybe<Array<Maybe<InventoryLocationOrder>>>
}

export type InventoryLocationOrderConnectionAdmin_User = {
  __typename?: 'InventoryLocationOrderConnectionAdmin_user'
  connection?: Maybe<InventoryLocationOrderConnection>
  key?: Maybe<Scalars['ID']>
}

export type InventoryLocationOrderConnectionCreated_At = {
  __typename?: 'InventoryLocationOrderConnectionCreated_at'
  connection?: Maybe<InventoryLocationOrderConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type InventoryLocationOrderConnectionId = {
  __typename?: 'InventoryLocationOrderConnectionId'
  connection?: Maybe<InventoryLocationOrderConnection>
  key?: Maybe<Scalars['ID']>
}

export type InventoryLocationOrderConnectionInventory_Location = {
  __typename?: 'InventoryLocationOrderConnectionInventory_location'
  connection?: Maybe<InventoryLocationOrderConnection>
  key?: Maybe<Scalars['ID']>
}

export type InventoryLocationOrderConnectionInventory_Meter = {
  __typename?: 'InventoryLocationOrderConnectionInventory_meter'
  connection?: Maybe<InventoryLocationOrderConnection>
  key?: Maybe<Scalars['ID']>
}

export type InventoryLocationOrderConnectionMeter_Addon = {
  __typename?: 'InventoryLocationOrderConnectionMeter_addon'
  connection?: Maybe<InventoryLocationOrderConnection>
  key?: Maybe<Scalars['ID']>
}

export type InventoryLocationOrderConnectionQuantity = {
  __typename?: 'InventoryLocationOrderConnectionQuantity'
  connection?: Maybe<InventoryLocationOrderConnection>
  key?: Maybe<Scalars['Float']>
}

export type InventoryLocationOrderConnectionUpdated_At = {
  __typename?: 'InventoryLocationOrderConnectionUpdated_at'
  connection?: Maybe<InventoryLocationOrderConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type InventoryLocationOrderGroupBy = {
  __typename?: 'InventoryLocationOrderGroupBy'
  admin_user?: Maybe<Array<Maybe<InventoryLocationOrderConnectionAdmin_User>>>
  created_at?: Maybe<Array<Maybe<InventoryLocationOrderConnectionCreated_At>>>
  id?: Maybe<Array<Maybe<InventoryLocationOrderConnectionId>>>
  inventory_location?: Maybe<Array<Maybe<InventoryLocationOrderConnectionInventory_Location>>>
  inventory_meter?: Maybe<Array<Maybe<InventoryLocationOrderConnectionInventory_Meter>>>
  meter_addon?: Maybe<Array<Maybe<InventoryLocationOrderConnectionMeter_Addon>>>
  quantity?: Maybe<Array<Maybe<InventoryLocationOrderConnectionQuantity>>>
  updated_at?: Maybe<Array<Maybe<InventoryLocationOrderConnectionUpdated_At>>>
}

export type InventoryLocationOrderInput = {
  admin_user?: InputMaybe<Scalars['ID']>
  created_by?: InputMaybe<Scalars['ID']>
  inventory_location?: InputMaybe<Scalars['ID']>
  inventory_meter?: InputMaybe<Scalars['ID']>
  meter_addon?: InputMaybe<Scalars['ID']>
  quantity?: InputMaybe<Scalars['Float']>
  updated_by?: InputMaybe<Scalars['ID']>
}

export type InventoryMeter = {
  __typename?: 'InventoryMeter'
  accessibility?: Maybe<Scalars['String']>
  backend_gateway_meter_id?: Maybe<Scalars['String']>
  building_floor?: Maybe<Scalars['Int']>
  calibrated?: Maybe<Scalars['Int']>
  code?: Maybe<Scalars['String']>
  created_at: Scalars['DateTime']
  data_source_channel?: Maybe<Scalars['Int']>
  data_source_id?: Maybe<Scalars['String']>
  factor?: Maybe<Scalars['Float']>
  floorplan_lat?: Maybe<Scalars['Float']>
  floorplan_lng?: Maybe<Scalars['Float']>
  id: Scalars['ID']
  initial_offset?: Maybe<Scalars['Float']>
  installed_at?: Maybe<Scalars['DateTime']>
  installed_by?: Maybe<Scalars['String']>
  inventory_location?: Maybe<InventoryLocation>
  inventory_location_building?: Maybe<InventoryLocationBuilding>
  inventory_location_orders?: Maybe<Array<Maybe<InventoryLocationOrder>>>
  inventory_meter_api_key?: Maybe<InventoryMeterApiKey>
  inventory_meter_checkpoints?: Maybe<Array<Maybe<InventoryMeterCheckpoint>>>
  inventory_meter_photos?: Maybe<Array<Maybe<InventoryMeterPhoto>>>
  inventory_meter_reading?: Maybe<Array<Maybe<InventoryMeterReading>>>
  lat?: Maybe<Scalars['Float']>
  lng?: Maybe<Scalars['Float']>
  manufactured?: Maybe<Scalars['Int']>
  meter_model?: Maybe<MeterModel>
  meter_mount_type?: Maybe<Enum_Inventorymeter_Meter_Mount_Type>
  meter_type?: Maybe<Enum_Inventorymeter_Meter_Type>
  monitored_entity?: Maybe<Scalars['String']>
  new_meter?: Maybe<Scalars['Boolean']>
  note?: Maybe<Scalars['String']>
  owner?: Maybe<Scalars['String']>
  owner_type?: Maybe<Enum_Inventorymeter_Owner_Type>
  remote_reading_owner?: Maybe<Scalars['String']>
  remote_reading_serial?: Maybe<Scalars['String']>
  rssi?: Maybe<Scalars['Int']>
  serial_number?: Maybe<Scalars['String']>
  submeter?: Maybe<Scalars['Boolean']>
  submitted_at?: Maybe<Scalars['DateTime']>
  submitted_by?: Maybe<Scalars['String']>
  tenant?: Maybe<Scalars['String']>
  unit?: Maybe<Enum_Inventorymeter_Unit>
  updated_at: Scalars['DateTime']
}

export type InventoryMeterInventory_Location_OrdersArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type InventoryMeterInventory_Meter_CheckpointsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type InventoryMeterInventory_Meter_PhotosArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type InventoryMeterInventory_Meter_ReadingArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type InventoryMeterAggregator = {
  __typename?: 'InventoryMeterAggregator'
  avg?: Maybe<InventoryMeterAggregatorAvg>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<InventoryMeterAggregatorMax>
  min?: Maybe<InventoryMeterAggregatorMin>
  sum?: Maybe<InventoryMeterAggregatorSum>
  totalCount?: Maybe<Scalars['Int']>
}

export type InventoryMeterAggregatorAvg = {
  __typename?: 'InventoryMeterAggregatorAvg'
  building_floor?: Maybe<Scalars['Float']>
  calibrated?: Maybe<Scalars['Float']>
  data_source_channel?: Maybe<Scalars['Float']>
  factor?: Maybe<Scalars['Float']>
  floorplan_lat?: Maybe<Scalars['Float']>
  floorplan_lng?: Maybe<Scalars['Float']>
  initial_offset?: Maybe<Scalars['Float']>
  lat?: Maybe<Scalars['Float']>
  lng?: Maybe<Scalars['Float']>
  manufactured?: Maybe<Scalars['Float']>
  rssi?: Maybe<Scalars['Float']>
}

export type InventoryMeterAggregatorMax = {
  __typename?: 'InventoryMeterAggregatorMax'
  building_floor?: Maybe<Scalars['Float']>
  calibrated?: Maybe<Scalars['Float']>
  data_source_channel?: Maybe<Scalars['Float']>
  factor?: Maybe<Scalars['Float']>
  floorplan_lat?: Maybe<Scalars['Float']>
  floorplan_lng?: Maybe<Scalars['Float']>
  initial_offset?: Maybe<Scalars['Float']>
  lat?: Maybe<Scalars['Float']>
  lng?: Maybe<Scalars['Float']>
  manufactured?: Maybe<Scalars['Float']>
  rssi?: Maybe<Scalars['Float']>
}

export type InventoryMeterAggregatorMin = {
  __typename?: 'InventoryMeterAggregatorMin'
  building_floor?: Maybe<Scalars['Float']>
  calibrated?: Maybe<Scalars['Float']>
  data_source_channel?: Maybe<Scalars['Float']>
  factor?: Maybe<Scalars['Float']>
  floorplan_lat?: Maybe<Scalars['Float']>
  floorplan_lng?: Maybe<Scalars['Float']>
  initial_offset?: Maybe<Scalars['Float']>
  lat?: Maybe<Scalars['Float']>
  lng?: Maybe<Scalars['Float']>
  manufactured?: Maybe<Scalars['Float']>
  rssi?: Maybe<Scalars['Float']>
}

export type InventoryMeterAggregatorSum = {
  __typename?: 'InventoryMeterAggregatorSum'
  building_floor?: Maybe<Scalars['Float']>
  calibrated?: Maybe<Scalars['Float']>
  data_source_channel?: Maybe<Scalars['Float']>
  factor?: Maybe<Scalars['Float']>
  floorplan_lat?: Maybe<Scalars['Float']>
  floorplan_lng?: Maybe<Scalars['Float']>
  initial_offset?: Maybe<Scalars['Float']>
  lat?: Maybe<Scalars['Float']>
  lng?: Maybe<Scalars['Float']>
  manufactured?: Maybe<Scalars['Float']>
  rssi?: Maybe<Scalars['Float']>
}

export type InventoryMeterApiKey = {
  __typename?: 'InventoryMeterApiKey'
  admin_user?: Maybe<AdminUser>
  api_key?: Maybe<Scalars['String']>
  created_at: Scalars['DateTime']
  id: Scalars['ID']
  inventory_meter?: Maybe<InventoryMeter>
  updated_at: Scalars['DateTime']
}

export type InventoryMeterApiKeyAggregator = {
  __typename?: 'InventoryMeterApiKeyAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type InventoryMeterApiKeyConnection = {
  __typename?: 'InventoryMeterApiKeyConnection'
  aggregate?: Maybe<InventoryMeterApiKeyAggregator>
  groupBy?: Maybe<InventoryMeterApiKeyGroupBy>
  values?: Maybe<Array<Maybe<InventoryMeterApiKey>>>
}

export type InventoryMeterApiKeyConnectionAdmin_User = {
  __typename?: 'InventoryMeterApiKeyConnectionAdmin_user'
  connection?: Maybe<InventoryMeterApiKeyConnection>
  key?: Maybe<Scalars['ID']>
}

export type InventoryMeterApiKeyConnectionApi_Key = {
  __typename?: 'InventoryMeterApiKeyConnectionApi_key'
  connection?: Maybe<InventoryMeterApiKeyConnection>
  key?: Maybe<Scalars['String']>
}

export type InventoryMeterApiKeyConnectionCreated_At = {
  __typename?: 'InventoryMeterApiKeyConnectionCreated_at'
  connection?: Maybe<InventoryMeterApiKeyConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type InventoryMeterApiKeyConnectionId = {
  __typename?: 'InventoryMeterApiKeyConnectionId'
  connection?: Maybe<InventoryMeterApiKeyConnection>
  key?: Maybe<Scalars['ID']>
}

export type InventoryMeterApiKeyConnectionInventory_Meter = {
  __typename?: 'InventoryMeterApiKeyConnectionInventory_meter'
  connection?: Maybe<InventoryMeterApiKeyConnection>
  key?: Maybe<Scalars['ID']>
}

export type InventoryMeterApiKeyConnectionUpdated_At = {
  __typename?: 'InventoryMeterApiKeyConnectionUpdated_at'
  connection?: Maybe<InventoryMeterApiKeyConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type InventoryMeterApiKeyGroupBy = {
  __typename?: 'InventoryMeterApiKeyGroupBy'
  admin_user?: Maybe<Array<Maybe<InventoryMeterApiKeyConnectionAdmin_User>>>
  api_key?: Maybe<Array<Maybe<InventoryMeterApiKeyConnectionApi_Key>>>
  created_at?: Maybe<Array<Maybe<InventoryMeterApiKeyConnectionCreated_At>>>
  id?: Maybe<Array<Maybe<InventoryMeterApiKeyConnectionId>>>
  inventory_meter?: Maybe<Array<Maybe<InventoryMeterApiKeyConnectionInventory_Meter>>>
  updated_at?: Maybe<Array<Maybe<InventoryMeterApiKeyConnectionUpdated_At>>>
}

export type InventoryMeterApiKeyInput = {
  admin_user?: InputMaybe<Scalars['ID']>
  api_key?: InputMaybe<Scalars['String']>
  created_by?: InputMaybe<Scalars['ID']>
  inventory_meter?: InputMaybe<Scalars['ID']>
  updated_by?: InputMaybe<Scalars['ID']>
}

export type InventoryMeterCheckpoint = {
  __typename?: 'InventoryMeterCheckpoint'
  checkpoint?: Maybe<Checkpoint>
  created_at: Scalars['DateTime']
  id: Scalars['ID']
  inventory_meter?: Maybe<InventoryMeter>
  submitted_at: Scalars['DateTime']
  updated_at: Scalars['DateTime']
}

export type InventoryMeterCheckpointAggregator = {
  __typename?: 'InventoryMeterCheckpointAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type InventoryMeterCheckpointConnection = {
  __typename?: 'InventoryMeterCheckpointConnection'
  aggregate?: Maybe<InventoryMeterCheckpointAggregator>
  groupBy?: Maybe<InventoryMeterCheckpointGroupBy>
  values?: Maybe<Array<Maybe<InventoryMeterCheckpoint>>>
}

export type InventoryMeterCheckpointConnectionCheckpoint = {
  __typename?: 'InventoryMeterCheckpointConnectionCheckpoint'
  connection?: Maybe<InventoryMeterCheckpointConnection>
  key?: Maybe<Scalars['ID']>
}

export type InventoryMeterCheckpointConnectionCreated_At = {
  __typename?: 'InventoryMeterCheckpointConnectionCreated_at'
  connection?: Maybe<InventoryMeterCheckpointConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type InventoryMeterCheckpointConnectionId = {
  __typename?: 'InventoryMeterCheckpointConnectionId'
  connection?: Maybe<InventoryMeterCheckpointConnection>
  key?: Maybe<Scalars['ID']>
}

export type InventoryMeterCheckpointConnectionInventory_Meter = {
  __typename?: 'InventoryMeterCheckpointConnectionInventory_meter'
  connection?: Maybe<InventoryMeterCheckpointConnection>
  key?: Maybe<Scalars['ID']>
}

export type InventoryMeterCheckpointConnectionSubmitted_At = {
  __typename?: 'InventoryMeterCheckpointConnectionSubmitted_at'
  connection?: Maybe<InventoryMeterCheckpointConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type InventoryMeterCheckpointConnectionUpdated_At = {
  __typename?: 'InventoryMeterCheckpointConnectionUpdated_at'
  connection?: Maybe<InventoryMeterCheckpointConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type InventoryMeterCheckpointGroupBy = {
  __typename?: 'InventoryMeterCheckpointGroupBy'
  checkpoint?: Maybe<Array<Maybe<InventoryMeterCheckpointConnectionCheckpoint>>>
  created_at?: Maybe<Array<Maybe<InventoryMeterCheckpointConnectionCreated_At>>>
  id?: Maybe<Array<Maybe<InventoryMeterCheckpointConnectionId>>>
  inventory_meter?: Maybe<Array<Maybe<InventoryMeterCheckpointConnectionInventory_Meter>>>
  submitted_at?: Maybe<Array<Maybe<InventoryMeterCheckpointConnectionSubmitted_At>>>
  updated_at?: Maybe<Array<Maybe<InventoryMeterCheckpointConnectionUpdated_At>>>
}

export type InventoryMeterCheckpointInput = {
  checkpoint?: InputMaybe<Scalars['ID']>
  created_by?: InputMaybe<Scalars['ID']>
  inventory_meter?: InputMaybe<Scalars['ID']>
  submitted_at: Scalars['DateTime']
  submitted_by?: InputMaybe<Scalars['ID']>
  updated_by?: InputMaybe<Scalars['ID']>
}

export type InventoryMeterConnection = {
  __typename?: 'InventoryMeterConnection'
  aggregate?: Maybe<InventoryMeterAggregator>
  groupBy?: Maybe<InventoryMeterGroupBy>
  values?: Maybe<Array<Maybe<InventoryMeter>>>
}

export type InventoryMeterConnectionAccessibility = {
  __typename?: 'InventoryMeterConnectionAccessibility'
  connection?: Maybe<InventoryMeterConnection>
  key?: Maybe<Scalars['String']>
}

export type InventoryMeterConnectionBackend_Gateway_Meter_Id = {
  __typename?: 'InventoryMeterConnectionBackend_gateway_meter_id'
  connection?: Maybe<InventoryMeterConnection>
  key?: Maybe<Scalars['String']>
}

export type InventoryMeterConnectionBuilding_Floor = {
  __typename?: 'InventoryMeterConnectionBuilding_floor'
  connection?: Maybe<InventoryMeterConnection>
  key?: Maybe<Scalars['Int']>
}

export type InventoryMeterConnectionCalibrated = {
  __typename?: 'InventoryMeterConnectionCalibrated'
  connection?: Maybe<InventoryMeterConnection>
  key?: Maybe<Scalars['Int']>
}

export type InventoryMeterConnectionCode = {
  __typename?: 'InventoryMeterConnectionCode'
  connection?: Maybe<InventoryMeterConnection>
  key?: Maybe<Scalars['String']>
}

export type InventoryMeterConnectionCreated_At = {
  __typename?: 'InventoryMeterConnectionCreated_at'
  connection?: Maybe<InventoryMeterConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type InventoryMeterConnectionData_Source_Channel = {
  __typename?: 'InventoryMeterConnectionData_source_channel'
  connection?: Maybe<InventoryMeterConnection>
  key?: Maybe<Scalars['Int']>
}

export type InventoryMeterConnectionData_Source_Id = {
  __typename?: 'InventoryMeterConnectionData_source_id'
  connection?: Maybe<InventoryMeterConnection>
  key?: Maybe<Scalars['String']>
}

export type InventoryMeterConnectionFactor = {
  __typename?: 'InventoryMeterConnectionFactor'
  connection?: Maybe<InventoryMeterConnection>
  key?: Maybe<Scalars['Float']>
}

export type InventoryMeterConnectionFloorplan_Lat = {
  __typename?: 'InventoryMeterConnectionFloorplan_lat'
  connection?: Maybe<InventoryMeterConnection>
  key?: Maybe<Scalars['Float']>
}

export type InventoryMeterConnectionFloorplan_Lng = {
  __typename?: 'InventoryMeterConnectionFloorplan_lng'
  connection?: Maybe<InventoryMeterConnection>
  key?: Maybe<Scalars['Float']>
}

export type InventoryMeterConnectionId = {
  __typename?: 'InventoryMeterConnectionId'
  connection?: Maybe<InventoryMeterConnection>
  key?: Maybe<Scalars['ID']>
}

export type InventoryMeterConnectionInitial_Offset = {
  __typename?: 'InventoryMeterConnectionInitial_offset'
  connection?: Maybe<InventoryMeterConnection>
  key?: Maybe<Scalars['Float']>
}

export type InventoryMeterConnectionInstalled_At = {
  __typename?: 'InventoryMeterConnectionInstalled_at'
  connection?: Maybe<InventoryMeterConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type InventoryMeterConnectionInstalled_By = {
  __typename?: 'InventoryMeterConnectionInstalled_by'
  connection?: Maybe<InventoryMeterConnection>
  key?: Maybe<Scalars['String']>
}

export type InventoryMeterConnectionInventory_Location = {
  __typename?: 'InventoryMeterConnectionInventory_location'
  connection?: Maybe<InventoryMeterConnection>
  key?: Maybe<Scalars['ID']>
}

export type InventoryMeterConnectionInventory_Location_Building = {
  __typename?: 'InventoryMeterConnectionInventory_location_building'
  connection?: Maybe<InventoryMeterConnection>
  key?: Maybe<Scalars['ID']>
}

export type InventoryMeterConnectionInventory_Meter_Api_Key = {
  __typename?: 'InventoryMeterConnectionInventory_meter_api_key'
  connection?: Maybe<InventoryMeterConnection>
  key?: Maybe<Scalars['ID']>
}

export type InventoryMeterConnectionLat = {
  __typename?: 'InventoryMeterConnectionLat'
  connection?: Maybe<InventoryMeterConnection>
  key?: Maybe<Scalars['Float']>
}

export type InventoryMeterConnectionLng = {
  __typename?: 'InventoryMeterConnectionLng'
  connection?: Maybe<InventoryMeterConnection>
  key?: Maybe<Scalars['Float']>
}

export type InventoryMeterConnectionManufactured = {
  __typename?: 'InventoryMeterConnectionManufactured'
  connection?: Maybe<InventoryMeterConnection>
  key?: Maybe<Scalars['Int']>
}

export type InventoryMeterConnectionMeter_Model = {
  __typename?: 'InventoryMeterConnectionMeter_model'
  connection?: Maybe<InventoryMeterConnection>
  key?: Maybe<Scalars['ID']>
}

export type InventoryMeterConnectionMeter_Mount_Type = {
  __typename?: 'InventoryMeterConnectionMeter_mount_type'
  connection?: Maybe<InventoryMeterConnection>
  key?: Maybe<Scalars['String']>
}

export type InventoryMeterConnectionMeter_Type = {
  __typename?: 'InventoryMeterConnectionMeter_type'
  connection?: Maybe<InventoryMeterConnection>
  key?: Maybe<Scalars['String']>
}

export type InventoryMeterConnectionMonitored_Entity = {
  __typename?: 'InventoryMeterConnectionMonitored_entity'
  connection?: Maybe<InventoryMeterConnection>
  key?: Maybe<Scalars['String']>
}

export type InventoryMeterConnectionNew_Meter = {
  __typename?: 'InventoryMeterConnectionNew_meter'
  connection?: Maybe<InventoryMeterConnection>
  key?: Maybe<Scalars['Boolean']>
}

export type InventoryMeterConnectionNote = {
  __typename?: 'InventoryMeterConnectionNote'
  connection?: Maybe<InventoryMeterConnection>
  key?: Maybe<Scalars['String']>
}

export type InventoryMeterConnectionOwner = {
  __typename?: 'InventoryMeterConnectionOwner'
  connection?: Maybe<InventoryMeterConnection>
  key?: Maybe<Scalars['String']>
}

export type InventoryMeterConnectionOwner_Type = {
  __typename?: 'InventoryMeterConnectionOwner_type'
  connection?: Maybe<InventoryMeterConnection>
  key?: Maybe<Scalars['String']>
}

export type InventoryMeterConnectionRemote_Reading_Owner = {
  __typename?: 'InventoryMeterConnectionRemote_reading_owner'
  connection?: Maybe<InventoryMeterConnection>
  key?: Maybe<Scalars['String']>
}

export type InventoryMeterConnectionRemote_Reading_Serial = {
  __typename?: 'InventoryMeterConnectionRemote_reading_serial'
  connection?: Maybe<InventoryMeterConnection>
  key?: Maybe<Scalars['String']>
}

export type InventoryMeterConnectionRssi = {
  __typename?: 'InventoryMeterConnectionRssi'
  connection?: Maybe<InventoryMeterConnection>
  key?: Maybe<Scalars['Int']>
}

export type InventoryMeterConnectionSerial_Number = {
  __typename?: 'InventoryMeterConnectionSerial_number'
  connection?: Maybe<InventoryMeterConnection>
  key?: Maybe<Scalars['String']>
}

export type InventoryMeterConnectionSubmeter = {
  __typename?: 'InventoryMeterConnectionSubmeter'
  connection?: Maybe<InventoryMeterConnection>
  key?: Maybe<Scalars['Boolean']>
}

export type InventoryMeterConnectionSubmitted_At = {
  __typename?: 'InventoryMeterConnectionSubmitted_at'
  connection?: Maybe<InventoryMeterConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type InventoryMeterConnectionSubmitted_By = {
  __typename?: 'InventoryMeterConnectionSubmitted_by'
  connection?: Maybe<InventoryMeterConnection>
  key?: Maybe<Scalars['String']>
}

export type InventoryMeterConnectionTenant = {
  __typename?: 'InventoryMeterConnectionTenant'
  connection?: Maybe<InventoryMeterConnection>
  key?: Maybe<Scalars['String']>
}

export type InventoryMeterConnectionUnit = {
  __typename?: 'InventoryMeterConnectionUnit'
  connection?: Maybe<InventoryMeterConnection>
  key?: Maybe<Scalars['String']>
}

export type InventoryMeterConnectionUpdated_At = {
  __typename?: 'InventoryMeterConnectionUpdated_at'
  connection?: Maybe<InventoryMeterConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type InventoryMeterElectricity = {
  __typename?: 'InventoryMeterElectricity'
  created_at: Scalars['DateTime']
  device_category?: Maybe<Enum_Inventorymeterelectricity_Device_Category>
  direct?: Maybe<Scalars['Boolean']>
  i_max?: Maybe<Scalars['Int']>
  i_measured?: Maybe<Scalars['Int']>
  i_range?: Maybe<Scalars['String']>
  id: Scalars['ID']
  input_spec?: Maybe<Scalars['String']>
  inventory_meter?: Maybe<InventoryMeter>
  mct?: Maybe<Enum_Inventorymeterelectricity_Mct>
  mounting?: Maybe<Enum_Inventorymeterelectricity_Mounting>
  phases?: Maybe<Scalars['Int']>
  tariffs?: Maybe<Scalars['Int']>
  updated_at: Scalars['DateTime']
  width?: Maybe<Scalars['Int']>
}

export type InventoryMeterElectricityAggregator = {
  __typename?: 'InventoryMeterElectricityAggregator'
  avg?: Maybe<InventoryMeterElectricityAggregatorAvg>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<InventoryMeterElectricityAggregatorMax>
  min?: Maybe<InventoryMeterElectricityAggregatorMin>
  sum?: Maybe<InventoryMeterElectricityAggregatorSum>
  totalCount?: Maybe<Scalars['Int']>
}

export type InventoryMeterElectricityAggregatorAvg = {
  __typename?: 'InventoryMeterElectricityAggregatorAvg'
  i_max?: Maybe<Scalars['Float']>
  i_measured?: Maybe<Scalars['Float']>
  phases?: Maybe<Scalars['Float']>
  tariffs?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
}

export type InventoryMeterElectricityAggregatorMax = {
  __typename?: 'InventoryMeterElectricityAggregatorMax'
  i_max?: Maybe<Scalars['Float']>
  i_measured?: Maybe<Scalars['Float']>
  phases?: Maybe<Scalars['Float']>
  tariffs?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
}

export type InventoryMeterElectricityAggregatorMin = {
  __typename?: 'InventoryMeterElectricityAggregatorMin'
  i_max?: Maybe<Scalars['Float']>
  i_measured?: Maybe<Scalars['Float']>
  phases?: Maybe<Scalars['Float']>
  tariffs?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
}

export type InventoryMeterElectricityAggregatorSum = {
  __typename?: 'InventoryMeterElectricityAggregatorSum'
  i_max?: Maybe<Scalars['Float']>
  i_measured?: Maybe<Scalars['Float']>
  phases?: Maybe<Scalars['Float']>
  tariffs?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
}

export type InventoryMeterElectricityConnection = {
  __typename?: 'InventoryMeterElectricityConnection'
  aggregate?: Maybe<InventoryMeterElectricityAggregator>
  groupBy?: Maybe<InventoryMeterElectricityGroupBy>
  values?: Maybe<Array<Maybe<InventoryMeterElectricity>>>
}

export type InventoryMeterElectricityConnectionCreated_At = {
  __typename?: 'InventoryMeterElectricityConnectionCreated_at'
  connection?: Maybe<InventoryMeterElectricityConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type InventoryMeterElectricityConnectionDevice_Category = {
  __typename?: 'InventoryMeterElectricityConnectionDevice_category'
  connection?: Maybe<InventoryMeterElectricityConnection>
  key?: Maybe<Scalars['String']>
}

export type InventoryMeterElectricityConnectionDirect = {
  __typename?: 'InventoryMeterElectricityConnectionDirect'
  connection?: Maybe<InventoryMeterElectricityConnection>
  key?: Maybe<Scalars['Boolean']>
}

export type InventoryMeterElectricityConnectionI_Max = {
  __typename?: 'InventoryMeterElectricityConnectionI_max'
  connection?: Maybe<InventoryMeterElectricityConnection>
  key?: Maybe<Scalars['Int']>
}

export type InventoryMeterElectricityConnectionI_Measured = {
  __typename?: 'InventoryMeterElectricityConnectionI_measured'
  connection?: Maybe<InventoryMeterElectricityConnection>
  key?: Maybe<Scalars['Int']>
}

export type InventoryMeterElectricityConnectionI_Range = {
  __typename?: 'InventoryMeterElectricityConnectionI_range'
  connection?: Maybe<InventoryMeterElectricityConnection>
  key?: Maybe<Scalars['String']>
}

export type InventoryMeterElectricityConnectionId = {
  __typename?: 'InventoryMeterElectricityConnectionId'
  connection?: Maybe<InventoryMeterElectricityConnection>
  key?: Maybe<Scalars['ID']>
}

export type InventoryMeterElectricityConnectionInput_Spec = {
  __typename?: 'InventoryMeterElectricityConnectionInput_spec'
  connection?: Maybe<InventoryMeterElectricityConnection>
  key?: Maybe<Scalars['String']>
}

export type InventoryMeterElectricityConnectionInventory_Meter = {
  __typename?: 'InventoryMeterElectricityConnectionInventory_meter'
  connection?: Maybe<InventoryMeterElectricityConnection>
  key?: Maybe<Scalars['ID']>
}

export type InventoryMeterElectricityConnectionMct = {
  __typename?: 'InventoryMeterElectricityConnectionMct'
  connection?: Maybe<InventoryMeterElectricityConnection>
  key?: Maybe<Scalars['String']>
}

export type InventoryMeterElectricityConnectionMounting = {
  __typename?: 'InventoryMeterElectricityConnectionMounting'
  connection?: Maybe<InventoryMeterElectricityConnection>
  key?: Maybe<Scalars['String']>
}

export type InventoryMeterElectricityConnectionPhases = {
  __typename?: 'InventoryMeterElectricityConnectionPhases'
  connection?: Maybe<InventoryMeterElectricityConnection>
  key?: Maybe<Scalars['Int']>
}

export type InventoryMeterElectricityConnectionTariffs = {
  __typename?: 'InventoryMeterElectricityConnectionTariffs'
  connection?: Maybe<InventoryMeterElectricityConnection>
  key?: Maybe<Scalars['Int']>
}

export type InventoryMeterElectricityConnectionUpdated_At = {
  __typename?: 'InventoryMeterElectricityConnectionUpdated_at'
  connection?: Maybe<InventoryMeterElectricityConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type InventoryMeterElectricityConnectionWidth = {
  __typename?: 'InventoryMeterElectricityConnectionWidth'
  connection?: Maybe<InventoryMeterElectricityConnection>
  key?: Maybe<Scalars['Int']>
}

export type InventoryMeterElectricityGroupBy = {
  __typename?: 'InventoryMeterElectricityGroupBy'
  created_at?: Maybe<Array<Maybe<InventoryMeterElectricityConnectionCreated_At>>>
  device_category?: Maybe<Array<Maybe<InventoryMeterElectricityConnectionDevice_Category>>>
  direct?: Maybe<Array<Maybe<InventoryMeterElectricityConnectionDirect>>>
  i_max?: Maybe<Array<Maybe<InventoryMeterElectricityConnectionI_Max>>>
  i_measured?: Maybe<Array<Maybe<InventoryMeterElectricityConnectionI_Measured>>>
  i_range?: Maybe<Array<Maybe<InventoryMeterElectricityConnectionI_Range>>>
  id?: Maybe<Array<Maybe<InventoryMeterElectricityConnectionId>>>
  input_spec?: Maybe<Array<Maybe<InventoryMeterElectricityConnectionInput_Spec>>>
  inventory_meter?: Maybe<Array<Maybe<InventoryMeterElectricityConnectionInventory_Meter>>>
  mct?: Maybe<Array<Maybe<InventoryMeterElectricityConnectionMct>>>
  mounting?: Maybe<Array<Maybe<InventoryMeterElectricityConnectionMounting>>>
  phases?: Maybe<Array<Maybe<InventoryMeterElectricityConnectionPhases>>>
  tariffs?: Maybe<Array<Maybe<InventoryMeterElectricityConnectionTariffs>>>
  updated_at?: Maybe<Array<Maybe<InventoryMeterElectricityConnectionUpdated_At>>>
  width?: Maybe<Array<Maybe<InventoryMeterElectricityConnectionWidth>>>
}

export type InventoryMeterElectricityInput = {
  created_by?: InputMaybe<Scalars['ID']>
  device_category?: InputMaybe<Enum_Inventorymeterelectricity_Device_Category>
  direct?: InputMaybe<Scalars['Boolean']>
  i_max?: InputMaybe<Scalars['Int']>
  i_measured?: InputMaybe<Scalars['Int']>
  i_range?: InputMaybe<Scalars['String']>
  input_spec?: InputMaybe<Scalars['String']>
  inventory_meter?: InputMaybe<Scalars['ID']>
  mct?: InputMaybe<Enum_Inventorymeterelectricity_Mct>
  mounting?: InputMaybe<Enum_Inventorymeterelectricity_Mounting>
  phases?: InputMaybe<Scalars['Int']>
  tariffs?: InputMaybe<Scalars['Int']>
  updated_by?: InputMaybe<Scalars['ID']>
  width?: InputMaybe<Scalars['Int']>
}

export type InventoryMeterGas = {
  __typename?: 'InventoryMeterGas'
  created_at: Scalars['DateTime']
  device_category?: Maybe<Enum_Inventorymetergas_Device_Category>
  diameter_nominal?: Maybe<Enum_Inventorymetergas_Diameter_Nominal>
  g_size?: Maybe<Enum_Inventorymetergas_G_Size>
  id: Scalars['ID']
  inventory_meter?: Maybe<InventoryMeter>
  lay_length?: Maybe<Scalars['Int']>
  orientation?: Maybe<Enum_Inventorymetergas_Orientation>
  p_max?: Maybe<Scalars['Float']>
  q_max?: Maybe<Scalars['Float']>
  q_min?: Maybe<Scalars['Float']>
  rated_power?: Maybe<Scalars['String']>
  updated_at: Scalars['DateTime']
}

export type InventoryMeterGasAggregator = {
  __typename?: 'InventoryMeterGasAggregator'
  avg?: Maybe<InventoryMeterGasAggregatorAvg>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<InventoryMeterGasAggregatorMax>
  min?: Maybe<InventoryMeterGasAggregatorMin>
  sum?: Maybe<InventoryMeterGasAggregatorSum>
  totalCount?: Maybe<Scalars['Int']>
}

export type InventoryMeterGasAggregatorAvg = {
  __typename?: 'InventoryMeterGasAggregatorAvg'
  lay_length?: Maybe<Scalars['Float']>
  p_max?: Maybe<Scalars['Float']>
  q_max?: Maybe<Scalars['Float']>
  q_min?: Maybe<Scalars['Float']>
}

export type InventoryMeterGasAggregatorMax = {
  __typename?: 'InventoryMeterGasAggregatorMax'
  lay_length?: Maybe<Scalars['Float']>
  p_max?: Maybe<Scalars['Float']>
  q_max?: Maybe<Scalars['Float']>
  q_min?: Maybe<Scalars['Float']>
}

export type InventoryMeterGasAggregatorMin = {
  __typename?: 'InventoryMeterGasAggregatorMin'
  lay_length?: Maybe<Scalars['Float']>
  p_max?: Maybe<Scalars['Float']>
  q_max?: Maybe<Scalars['Float']>
  q_min?: Maybe<Scalars['Float']>
}

export type InventoryMeterGasAggregatorSum = {
  __typename?: 'InventoryMeterGasAggregatorSum'
  lay_length?: Maybe<Scalars['Float']>
  p_max?: Maybe<Scalars['Float']>
  q_max?: Maybe<Scalars['Float']>
  q_min?: Maybe<Scalars['Float']>
}

export type InventoryMeterGasConnection = {
  __typename?: 'InventoryMeterGasConnection'
  aggregate?: Maybe<InventoryMeterGasAggregator>
  groupBy?: Maybe<InventoryMeterGasGroupBy>
  values?: Maybe<Array<Maybe<InventoryMeterGas>>>
}

export type InventoryMeterGasConnectionCreated_At = {
  __typename?: 'InventoryMeterGasConnectionCreated_at'
  connection?: Maybe<InventoryMeterGasConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type InventoryMeterGasConnectionDevice_Category = {
  __typename?: 'InventoryMeterGasConnectionDevice_category'
  connection?: Maybe<InventoryMeterGasConnection>
  key?: Maybe<Scalars['String']>
}

export type InventoryMeterGasConnectionDiameter_Nominal = {
  __typename?: 'InventoryMeterGasConnectionDiameter_nominal'
  connection?: Maybe<InventoryMeterGasConnection>
  key?: Maybe<Scalars['String']>
}

export type InventoryMeterGasConnectionG_Size = {
  __typename?: 'InventoryMeterGasConnectionG_size'
  connection?: Maybe<InventoryMeterGasConnection>
  key?: Maybe<Scalars['String']>
}

export type InventoryMeterGasConnectionId = {
  __typename?: 'InventoryMeterGasConnectionId'
  connection?: Maybe<InventoryMeterGasConnection>
  key?: Maybe<Scalars['ID']>
}

export type InventoryMeterGasConnectionInventory_Meter = {
  __typename?: 'InventoryMeterGasConnectionInventory_meter'
  connection?: Maybe<InventoryMeterGasConnection>
  key?: Maybe<Scalars['ID']>
}

export type InventoryMeterGasConnectionLay_Length = {
  __typename?: 'InventoryMeterGasConnectionLay_length'
  connection?: Maybe<InventoryMeterGasConnection>
  key?: Maybe<Scalars['Int']>
}

export type InventoryMeterGasConnectionOrientation = {
  __typename?: 'InventoryMeterGasConnectionOrientation'
  connection?: Maybe<InventoryMeterGasConnection>
  key?: Maybe<Scalars['String']>
}

export type InventoryMeterGasConnectionP_Max = {
  __typename?: 'InventoryMeterGasConnectionP_max'
  connection?: Maybe<InventoryMeterGasConnection>
  key?: Maybe<Scalars['Float']>
}

export type InventoryMeterGasConnectionQ_Max = {
  __typename?: 'InventoryMeterGasConnectionQ_max'
  connection?: Maybe<InventoryMeterGasConnection>
  key?: Maybe<Scalars['Float']>
}

export type InventoryMeterGasConnectionQ_Min = {
  __typename?: 'InventoryMeterGasConnectionQ_min'
  connection?: Maybe<InventoryMeterGasConnection>
  key?: Maybe<Scalars['Float']>
}

export type InventoryMeterGasConnectionRated_Power = {
  __typename?: 'InventoryMeterGasConnectionRated_power'
  connection?: Maybe<InventoryMeterGasConnection>
  key?: Maybe<Scalars['String']>
}

export type InventoryMeterGasConnectionUpdated_At = {
  __typename?: 'InventoryMeterGasConnectionUpdated_at'
  connection?: Maybe<InventoryMeterGasConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type InventoryMeterGasGroupBy = {
  __typename?: 'InventoryMeterGasGroupBy'
  created_at?: Maybe<Array<Maybe<InventoryMeterGasConnectionCreated_At>>>
  device_category?: Maybe<Array<Maybe<InventoryMeterGasConnectionDevice_Category>>>
  diameter_nominal?: Maybe<Array<Maybe<InventoryMeterGasConnectionDiameter_Nominal>>>
  g_size?: Maybe<Array<Maybe<InventoryMeterGasConnectionG_Size>>>
  id?: Maybe<Array<Maybe<InventoryMeterGasConnectionId>>>
  inventory_meter?: Maybe<Array<Maybe<InventoryMeterGasConnectionInventory_Meter>>>
  lay_length?: Maybe<Array<Maybe<InventoryMeterGasConnectionLay_Length>>>
  orientation?: Maybe<Array<Maybe<InventoryMeterGasConnectionOrientation>>>
  p_max?: Maybe<Array<Maybe<InventoryMeterGasConnectionP_Max>>>
  q_max?: Maybe<Array<Maybe<InventoryMeterGasConnectionQ_Max>>>
  q_min?: Maybe<Array<Maybe<InventoryMeterGasConnectionQ_Min>>>
  rated_power?: Maybe<Array<Maybe<InventoryMeterGasConnectionRated_Power>>>
  updated_at?: Maybe<Array<Maybe<InventoryMeterGasConnectionUpdated_At>>>
}

export type InventoryMeterGasInput = {
  created_by?: InputMaybe<Scalars['ID']>
  device_category?: InputMaybe<Enum_Inventorymetergas_Device_Category>
  diameter_nominal?: InputMaybe<Enum_Inventorymetergas_Diameter_Nominal>
  g_size?: InputMaybe<Enum_Inventorymetergas_G_Size>
  inventory_meter?: InputMaybe<Scalars['ID']>
  lay_length?: InputMaybe<Scalars['Int']>
  orientation?: InputMaybe<Enum_Inventorymetergas_Orientation>
  p_max?: InputMaybe<Scalars['Float']>
  q_max?: InputMaybe<Scalars['Float']>
  q_min?: InputMaybe<Scalars['Float']>
  rated_power?: InputMaybe<Scalars['String']>
  updated_by?: InputMaybe<Scalars['ID']>
}

export type InventoryMeterGroupBy = {
  __typename?: 'InventoryMeterGroupBy'
  accessibility?: Maybe<Array<Maybe<InventoryMeterConnectionAccessibility>>>
  backend_gateway_meter_id?: Maybe<Array<Maybe<InventoryMeterConnectionBackend_Gateway_Meter_Id>>>
  building_floor?: Maybe<Array<Maybe<InventoryMeterConnectionBuilding_Floor>>>
  calibrated?: Maybe<Array<Maybe<InventoryMeterConnectionCalibrated>>>
  code?: Maybe<Array<Maybe<InventoryMeterConnectionCode>>>
  created_at?: Maybe<Array<Maybe<InventoryMeterConnectionCreated_At>>>
  data_source_channel?: Maybe<Array<Maybe<InventoryMeterConnectionData_Source_Channel>>>
  data_source_id?: Maybe<Array<Maybe<InventoryMeterConnectionData_Source_Id>>>
  factor?: Maybe<Array<Maybe<InventoryMeterConnectionFactor>>>
  floorplan_lat?: Maybe<Array<Maybe<InventoryMeterConnectionFloorplan_Lat>>>
  floorplan_lng?: Maybe<Array<Maybe<InventoryMeterConnectionFloorplan_Lng>>>
  id?: Maybe<Array<Maybe<InventoryMeterConnectionId>>>
  initial_offset?: Maybe<Array<Maybe<InventoryMeterConnectionInitial_Offset>>>
  installed_at?: Maybe<Array<Maybe<InventoryMeterConnectionInstalled_At>>>
  installed_by?: Maybe<Array<Maybe<InventoryMeterConnectionInstalled_By>>>
  inventory_location?: Maybe<Array<Maybe<InventoryMeterConnectionInventory_Location>>>
  inventory_location_building?: Maybe<
    Array<Maybe<InventoryMeterConnectionInventory_Location_Building>>
  >
  inventory_meter_api_key?: Maybe<Array<Maybe<InventoryMeterConnectionInventory_Meter_Api_Key>>>
  lat?: Maybe<Array<Maybe<InventoryMeterConnectionLat>>>
  lng?: Maybe<Array<Maybe<InventoryMeterConnectionLng>>>
  manufactured?: Maybe<Array<Maybe<InventoryMeterConnectionManufactured>>>
  meter_model?: Maybe<Array<Maybe<InventoryMeterConnectionMeter_Model>>>
  meter_mount_type?: Maybe<Array<Maybe<InventoryMeterConnectionMeter_Mount_Type>>>
  meter_type?: Maybe<Array<Maybe<InventoryMeterConnectionMeter_Type>>>
  monitored_entity?: Maybe<Array<Maybe<InventoryMeterConnectionMonitored_Entity>>>
  new_meter?: Maybe<Array<Maybe<InventoryMeterConnectionNew_Meter>>>
  note?: Maybe<Array<Maybe<InventoryMeterConnectionNote>>>
  owner?: Maybe<Array<Maybe<InventoryMeterConnectionOwner>>>
  owner_type?: Maybe<Array<Maybe<InventoryMeterConnectionOwner_Type>>>
  remote_reading_owner?: Maybe<Array<Maybe<InventoryMeterConnectionRemote_Reading_Owner>>>
  remote_reading_serial?: Maybe<Array<Maybe<InventoryMeterConnectionRemote_Reading_Serial>>>
  rssi?: Maybe<Array<Maybe<InventoryMeterConnectionRssi>>>
  serial_number?: Maybe<Array<Maybe<InventoryMeterConnectionSerial_Number>>>
  submeter?: Maybe<Array<Maybe<InventoryMeterConnectionSubmeter>>>
  submitted_at?: Maybe<Array<Maybe<InventoryMeterConnectionSubmitted_At>>>
  submitted_by?: Maybe<Array<Maybe<InventoryMeterConnectionSubmitted_By>>>
  tenant?: Maybe<Array<Maybe<InventoryMeterConnectionTenant>>>
  unit?: Maybe<Array<Maybe<InventoryMeterConnectionUnit>>>
  updated_at?: Maybe<Array<Maybe<InventoryMeterConnectionUpdated_At>>>
}

export type InventoryMeterHeatCold = {
  __typename?: 'InventoryMeterHeatCold'
  created_at: Scalars['DateTime']
  diameter_nominal?: Maybe<Enum_Inventorymeterheatcold_Diameter_Nominal>
  flange?: Maybe<Scalars['Boolean']>
  flowrate?: Maybe<Scalars['String']>
  id: Scalars['ID']
  installation_position?: Maybe<Enum_Inventorymeterheatcold_Installation_Position>
  inventory_meter?: Maybe<InventoryMeter>
  lay_length?: Maybe<Scalars['Int']>
  orientation?: Maybe<Enum_Inventorymeterheatcold_Orientation>
  resistance?: Maybe<Enum_Inventorymeterheatcold_Resistance>
  updated_at: Scalars['DateTime']
}

export type InventoryMeterHeatColdAggregator = {
  __typename?: 'InventoryMeterHeatColdAggregator'
  avg?: Maybe<InventoryMeterHeatColdAggregatorAvg>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<InventoryMeterHeatColdAggregatorMax>
  min?: Maybe<InventoryMeterHeatColdAggregatorMin>
  sum?: Maybe<InventoryMeterHeatColdAggregatorSum>
  totalCount?: Maybe<Scalars['Int']>
}

export type InventoryMeterHeatColdAggregatorAvg = {
  __typename?: 'InventoryMeterHeatColdAggregatorAvg'
  lay_length?: Maybe<Scalars['Float']>
}

export type InventoryMeterHeatColdAggregatorMax = {
  __typename?: 'InventoryMeterHeatColdAggregatorMax'
  lay_length?: Maybe<Scalars['Float']>
}

export type InventoryMeterHeatColdAggregatorMin = {
  __typename?: 'InventoryMeterHeatColdAggregatorMin'
  lay_length?: Maybe<Scalars['Float']>
}

export type InventoryMeterHeatColdAggregatorSum = {
  __typename?: 'InventoryMeterHeatColdAggregatorSum'
  lay_length?: Maybe<Scalars['Float']>
}

export type InventoryMeterHeatColdConnection = {
  __typename?: 'InventoryMeterHeatColdConnection'
  aggregate?: Maybe<InventoryMeterHeatColdAggregator>
  groupBy?: Maybe<InventoryMeterHeatColdGroupBy>
  values?: Maybe<Array<Maybe<InventoryMeterHeatCold>>>
}

export type InventoryMeterHeatColdConnectionCreated_At = {
  __typename?: 'InventoryMeterHeatColdConnectionCreated_at'
  connection?: Maybe<InventoryMeterHeatColdConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type InventoryMeterHeatColdConnectionDiameter_Nominal = {
  __typename?: 'InventoryMeterHeatColdConnectionDiameter_nominal'
  connection?: Maybe<InventoryMeterHeatColdConnection>
  key?: Maybe<Scalars['String']>
}

export type InventoryMeterHeatColdConnectionFlange = {
  __typename?: 'InventoryMeterHeatColdConnectionFlange'
  connection?: Maybe<InventoryMeterHeatColdConnection>
  key?: Maybe<Scalars['Boolean']>
}

export type InventoryMeterHeatColdConnectionFlowrate = {
  __typename?: 'InventoryMeterHeatColdConnectionFlowrate'
  connection?: Maybe<InventoryMeterHeatColdConnection>
  key?: Maybe<Scalars['String']>
}

export type InventoryMeterHeatColdConnectionId = {
  __typename?: 'InventoryMeterHeatColdConnectionId'
  connection?: Maybe<InventoryMeterHeatColdConnection>
  key?: Maybe<Scalars['ID']>
}

export type InventoryMeterHeatColdConnectionInstallation_Position = {
  __typename?: 'InventoryMeterHeatColdConnectionInstallation_position'
  connection?: Maybe<InventoryMeterHeatColdConnection>
  key?: Maybe<Scalars['String']>
}

export type InventoryMeterHeatColdConnectionInventory_Meter = {
  __typename?: 'InventoryMeterHeatColdConnectionInventory_meter'
  connection?: Maybe<InventoryMeterHeatColdConnection>
  key?: Maybe<Scalars['ID']>
}

export type InventoryMeterHeatColdConnectionLay_Length = {
  __typename?: 'InventoryMeterHeatColdConnectionLay_length'
  connection?: Maybe<InventoryMeterHeatColdConnection>
  key?: Maybe<Scalars['Int']>
}

export type InventoryMeterHeatColdConnectionOrientation = {
  __typename?: 'InventoryMeterHeatColdConnectionOrientation'
  connection?: Maybe<InventoryMeterHeatColdConnection>
  key?: Maybe<Scalars['String']>
}

export type InventoryMeterHeatColdConnectionResistance = {
  __typename?: 'InventoryMeterHeatColdConnectionResistance'
  connection?: Maybe<InventoryMeterHeatColdConnection>
  key?: Maybe<Scalars['String']>
}

export type InventoryMeterHeatColdConnectionUpdated_At = {
  __typename?: 'InventoryMeterHeatColdConnectionUpdated_at'
  connection?: Maybe<InventoryMeterHeatColdConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type InventoryMeterHeatColdGroupBy = {
  __typename?: 'InventoryMeterHeatColdGroupBy'
  created_at?: Maybe<Array<Maybe<InventoryMeterHeatColdConnectionCreated_At>>>
  diameter_nominal?: Maybe<Array<Maybe<InventoryMeterHeatColdConnectionDiameter_Nominal>>>
  flange?: Maybe<Array<Maybe<InventoryMeterHeatColdConnectionFlange>>>
  flowrate?: Maybe<Array<Maybe<InventoryMeterHeatColdConnectionFlowrate>>>
  id?: Maybe<Array<Maybe<InventoryMeterHeatColdConnectionId>>>
  installation_position?: Maybe<Array<Maybe<InventoryMeterHeatColdConnectionInstallation_Position>>>
  inventory_meter?: Maybe<Array<Maybe<InventoryMeterHeatColdConnectionInventory_Meter>>>
  lay_length?: Maybe<Array<Maybe<InventoryMeterHeatColdConnectionLay_Length>>>
  orientation?: Maybe<Array<Maybe<InventoryMeterHeatColdConnectionOrientation>>>
  resistance?: Maybe<Array<Maybe<InventoryMeterHeatColdConnectionResistance>>>
  updated_at?: Maybe<Array<Maybe<InventoryMeterHeatColdConnectionUpdated_At>>>
}

export type InventoryMeterHeatColdInput = {
  created_by?: InputMaybe<Scalars['ID']>
  diameter_nominal?: InputMaybe<Enum_Inventorymeterheatcold_Diameter_Nominal>
  flange?: InputMaybe<Scalars['Boolean']>
  flowrate?: InputMaybe<Scalars['String']>
  installation_position?: InputMaybe<Enum_Inventorymeterheatcold_Installation_Position>
  inventory_meter?: InputMaybe<Scalars['ID']>
  lay_length?: InputMaybe<Scalars['Int']>
  orientation?: InputMaybe<Enum_Inventorymeterheatcold_Orientation>
  resistance?: InputMaybe<Enum_Inventorymeterheatcold_Resistance>
  updated_by?: InputMaybe<Scalars['ID']>
}

export type InventoryMeterInput = {
  accessibility?: InputMaybe<Scalars['String']>
  backend_gateway_meter_id?: InputMaybe<Scalars['String']>
  building_floor?: InputMaybe<Scalars['Int']>
  calibrated?: InputMaybe<Scalars['Int']>
  code?: InputMaybe<Scalars['String']>
  created_by?: InputMaybe<Scalars['ID']>
  data_source_channel?: InputMaybe<Scalars['Int']>
  data_source_id?: InputMaybe<Scalars['String']>
  factor?: InputMaybe<Scalars['Float']>
  floorplan_lat?: InputMaybe<Scalars['Float']>
  floorplan_lng?: InputMaybe<Scalars['Float']>
  initial_offset?: InputMaybe<Scalars['Float']>
  installed_at?: InputMaybe<Scalars['DateTime']>
  installed_by?: InputMaybe<Scalars['String']>
  inventory_location?: InputMaybe<Scalars['ID']>
  inventory_location_building?: InputMaybe<Scalars['ID']>
  inventory_location_orders?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  inventory_meter_api_key?: InputMaybe<Scalars['ID']>
  inventory_meter_checkpoints?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  inventory_meter_photos?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  inventory_meter_reading?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  lat?: InputMaybe<Scalars['Float']>
  lng?: InputMaybe<Scalars['Float']>
  manufactured?: InputMaybe<Scalars['Int']>
  meter_model?: InputMaybe<Scalars['ID']>
  meter_mount_type?: InputMaybe<Enum_Inventorymeter_Meter_Mount_Type>
  meter_type?: InputMaybe<Enum_Inventorymeter_Meter_Type>
  monitored_entity?: InputMaybe<Scalars['String']>
  new_meter?: InputMaybe<Scalars['Boolean']>
  note?: InputMaybe<Scalars['String']>
  owner?: InputMaybe<Scalars['String']>
  owner_type?: InputMaybe<Enum_Inventorymeter_Owner_Type>
  remote_reading_owner?: InputMaybe<Scalars['String']>
  remote_reading_serial?: InputMaybe<Scalars['String']>
  rssi?: InputMaybe<Scalars['Int']>
  serial_number?: InputMaybe<Scalars['String']>
  submeter?: InputMaybe<Scalars['Boolean']>
  submitted_at?: InputMaybe<Scalars['DateTime']>
  submitted_by?: InputMaybe<Scalars['String']>
  tenant?: InputMaybe<Scalars['String']>
  unit?: InputMaybe<Enum_Inventorymeter_Unit>
  updated_by?: InputMaybe<Scalars['ID']>
}

export type InventoryMeterOther = {
  __typename?: 'InventoryMeterOther'
  created_at: Scalars['DateTime']
  device_category?: Maybe<Enum_Inventorymeterother_Device_Category>
  id: Scalars['ID']
  inventory_meter?: Maybe<InventoryMeter>
  updated_at: Scalars['DateTime']
}

export type InventoryMeterOtherAggregator = {
  __typename?: 'InventoryMeterOtherAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type InventoryMeterOtherConnection = {
  __typename?: 'InventoryMeterOtherConnection'
  aggregate?: Maybe<InventoryMeterOtherAggregator>
  groupBy?: Maybe<InventoryMeterOtherGroupBy>
  values?: Maybe<Array<Maybe<InventoryMeterOther>>>
}

export type InventoryMeterOtherConnectionCreated_At = {
  __typename?: 'InventoryMeterOtherConnectionCreated_at'
  connection?: Maybe<InventoryMeterOtherConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type InventoryMeterOtherConnectionDevice_Category = {
  __typename?: 'InventoryMeterOtherConnectionDevice_category'
  connection?: Maybe<InventoryMeterOtherConnection>
  key?: Maybe<Scalars['String']>
}

export type InventoryMeterOtherConnectionId = {
  __typename?: 'InventoryMeterOtherConnectionId'
  connection?: Maybe<InventoryMeterOtherConnection>
  key?: Maybe<Scalars['ID']>
}

export type InventoryMeterOtherConnectionInventory_Meter = {
  __typename?: 'InventoryMeterOtherConnectionInventory_meter'
  connection?: Maybe<InventoryMeterOtherConnection>
  key?: Maybe<Scalars['ID']>
}

export type InventoryMeterOtherConnectionUpdated_At = {
  __typename?: 'InventoryMeterOtherConnectionUpdated_at'
  connection?: Maybe<InventoryMeterOtherConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type InventoryMeterOtherGroupBy = {
  __typename?: 'InventoryMeterOtherGroupBy'
  created_at?: Maybe<Array<Maybe<InventoryMeterOtherConnectionCreated_At>>>
  device_category?: Maybe<Array<Maybe<InventoryMeterOtherConnectionDevice_Category>>>
  id?: Maybe<Array<Maybe<InventoryMeterOtherConnectionId>>>
  inventory_meter?: Maybe<Array<Maybe<InventoryMeterOtherConnectionInventory_Meter>>>
  updated_at?: Maybe<Array<Maybe<InventoryMeterOtherConnectionUpdated_At>>>
}

export type InventoryMeterOtherInput = {
  created_by?: InputMaybe<Scalars['ID']>
  device_category?: InputMaybe<Enum_Inventorymeterother_Device_Category>
  inventory_meter?: InputMaybe<Scalars['ID']>
  updated_by?: InputMaybe<Scalars['ID']>
}

export type InventoryMeterPhoto = {
  __typename?: 'InventoryMeterPhoto'
  created_at: Scalars['DateTime']
  file_drive_id?: Maybe<Scalars['String']>
  id: Scalars['ID']
  inventory_meter?: Maybe<InventoryMeter>
  type?: Maybe<Enum_Inventorymeterphoto_Type>
  updated_at: Scalars['DateTime']
}

export type InventoryMeterPhotoAggregator = {
  __typename?: 'InventoryMeterPhotoAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type InventoryMeterPhotoConnection = {
  __typename?: 'InventoryMeterPhotoConnection'
  aggregate?: Maybe<InventoryMeterPhotoAggregator>
  groupBy?: Maybe<InventoryMeterPhotoGroupBy>
  values?: Maybe<Array<Maybe<InventoryMeterPhoto>>>
}

export type InventoryMeterPhotoConnectionCreated_At = {
  __typename?: 'InventoryMeterPhotoConnectionCreated_at'
  connection?: Maybe<InventoryMeterPhotoConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type InventoryMeterPhotoConnectionFile_Drive_Id = {
  __typename?: 'InventoryMeterPhotoConnectionFile_drive_id'
  connection?: Maybe<InventoryMeterPhotoConnection>
  key?: Maybe<Scalars['String']>
}

export type InventoryMeterPhotoConnectionId = {
  __typename?: 'InventoryMeterPhotoConnectionId'
  connection?: Maybe<InventoryMeterPhotoConnection>
  key?: Maybe<Scalars['ID']>
}

export type InventoryMeterPhotoConnectionInventory_Meter = {
  __typename?: 'InventoryMeterPhotoConnectionInventory_meter'
  connection?: Maybe<InventoryMeterPhotoConnection>
  key?: Maybe<Scalars['ID']>
}

export type InventoryMeterPhotoConnectionType = {
  __typename?: 'InventoryMeterPhotoConnectionType'
  connection?: Maybe<InventoryMeterPhotoConnection>
  key?: Maybe<Scalars['String']>
}

export type InventoryMeterPhotoConnectionUpdated_At = {
  __typename?: 'InventoryMeterPhotoConnectionUpdated_at'
  connection?: Maybe<InventoryMeterPhotoConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type InventoryMeterPhotoGroupBy = {
  __typename?: 'InventoryMeterPhotoGroupBy'
  created_at?: Maybe<Array<Maybe<InventoryMeterPhotoConnectionCreated_At>>>
  file_drive_id?: Maybe<Array<Maybe<InventoryMeterPhotoConnectionFile_Drive_Id>>>
  id?: Maybe<Array<Maybe<InventoryMeterPhotoConnectionId>>>
  inventory_meter?: Maybe<Array<Maybe<InventoryMeterPhotoConnectionInventory_Meter>>>
  type?: Maybe<Array<Maybe<InventoryMeterPhotoConnectionType>>>
  updated_at?: Maybe<Array<Maybe<InventoryMeterPhotoConnectionUpdated_At>>>
}

export type InventoryMeterPhotoInput = {
  created_by?: InputMaybe<Scalars['ID']>
  file_drive_id?: InputMaybe<Scalars['String']>
  inventory_meter?: InputMaybe<Scalars['ID']>
  type?: InputMaybe<Enum_Inventorymeterphoto_Type>
  updated_by?: InputMaybe<Scalars['ID']>
}

export type InventoryMeterReading = {
  __typename?: 'InventoryMeterReading'
  counter?: Maybe<Scalars['Float']>
  created_at: Scalars['DateTime']
  date?: Maybe<Scalars['DateTime']>
  id: Scalars['ID']
  inventory_meter?: Maybe<InventoryMeter>
  published_at?: Maybe<Scalars['DateTime']>
  updated_at: Scalars['DateTime']
}

export type InventoryMeterReadingAggregator = {
  __typename?: 'InventoryMeterReadingAggregator'
  avg?: Maybe<InventoryMeterReadingAggregatorAvg>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<InventoryMeterReadingAggregatorMax>
  min?: Maybe<InventoryMeterReadingAggregatorMin>
  sum?: Maybe<InventoryMeterReadingAggregatorSum>
  totalCount?: Maybe<Scalars['Int']>
}

export type InventoryMeterReadingAggregatorAvg = {
  __typename?: 'InventoryMeterReadingAggregatorAvg'
  counter?: Maybe<Scalars['Float']>
}

export type InventoryMeterReadingAggregatorMax = {
  __typename?: 'InventoryMeterReadingAggregatorMax'
  counter?: Maybe<Scalars['Float']>
}

export type InventoryMeterReadingAggregatorMin = {
  __typename?: 'InventoryMeterReadingAggregatorMin'
  counter?: Maybe<Scalars['Float']>
}

export type InventoryMeterReadingAggregatorSum = {
  __typename?: 'InventoryMeterReadingAggregatorSum'
  counter?: Maybe<Scalars['Float']>
}

export type InventoryMeterReadingConnection = {
  __typename?: 'InventoryMeterReadingConnection'
  aggregate?: Maybe<InventoryMeterReadingAggregator>
  groupBy?: Maybe<InventoryMeterReadingGroupBy>
  values?: Maybe<Array<Maybe<InventoryMeterReading>>>
}

export type InventoryMeterReadingConnectionCounter = {
  __typename?: 'InventoryMeterReadingConnectionCounter'
  connection?: Maybe<InventoryMeterReadingConnection>
  key?: Maybe<Scalars['Float']>
}

export type InventoryMeterReadingConnectionCreated_At = {
  __typename?: 'InventoryMeterReadingConnectionCreated_at'
  connection?: Maybe<InventoryMeterReadingConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type InventoryMeterReadingConnectionDate = {
  __typename?: 'InventoryMeterReadingConnectionDate'
  connection?: Maybe<InventoryMeterReadingConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type InventoryMeterReadingConnectionId = {
  __typename?: 'InventoryMeterReadingConnectionId'
  connection?: Maybe<InventoryMeterReadingConnection>
  key?: Maybe<Scalars['ID']>
}

export type InventoryMeterReadingConnectionInventory_Meter = {
  __typename?: 'InventoryMeterReadingConnectionInventory_meter'
  connection?: Maybe<InventoryMeterReadingConnection>
  key?: Maybe<Scalars['ID']>
}

export type InventoryMeterReadingConnectionPublished_At = {
  __typename?: 'InventoryMeterReadingConnectionPublished_at'
  connection?: Maybe<InventoryMeterReadingConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type InventoryMeterReadingConnectionUpdated_At = {
  __typename?: 'InventoryMeterReadingConnectionUpdated_at'
  connection?: Maybe<InventoryMeterReadingConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type InventoryMeterReadingGroupBy = {
  __typename?: 'InventoryMeterReadingGroupBy'
  counter?: Maybe<Array<Maybe<InventoryMeterReadingConnectionCounter>>>
  created_at?: Maybe<Array<Maybe<InventoryMeterReadingConnectionCreated_At>>>
  date?: Maybe<Array<Maybe<InventoryMeterReadingConnectionDate>>>
  id?: Maybe<Array<Maybe<InventoryMeterReadingConnectionId>>>
  inventory_meter?: Maybe<Array<Maybe<InventoryMeterReadingConnectionInventory_Meter>>>
  published_at?: Maybe<Array<Maybe<InventoryMeterReadingConnectionPublished_At>>>
  updated_at?: Maybe<Array<Maybe<InventoryMeterReadingConnectionUpdated_At>>>
}

export type InventoryMeterReadingInput = {
  counter?: InputMaybe<Scalars['Float']>
  created_by?: InputMaybe<Scalars['ID']>
  date?: InputMaybe<Scalars['DateTime']>
  inventory_meter?: InputMaybe<Scalars['ID']>
  published_at?: InputMaybe<Scalars['DateTime']>
  updated_by?: InputMaybe<Scalars['ID']>
}

export type InventoryMeterWater = {
  __typename?: 'InventoryMeterWater'
  created_at: Scalars['DateTime']
  diameter_nominal?: Maybe<Enum_Inventorymeterwater_Diameter_Nominal>
  flange?: Maybe<Scalars['Boolean']>
  flowrate?: Maybe<Scalars['String']>
  hot_water?: Maybe<Scalars['Boolean']>
  id: Scalars['ID']
  inventory_meter?: Maybe<InventoryMeter>
  lay_length?: Maybe<Scalars['Int']>
  orientation?: Maybe<Enum_Inventorymeterwater_Orientation>
  tube_material?: Maybe<Enum_Inventorymeterwater_Tube_Material>
  updated_at: Scalars['DateTime']
  woltman?: Maybe<Scalars['Boolean']>
}

export type InventoryMeterWaterAggregator = {
  __typename?: 'InventoryMeterWaterAggregator'
  avg?: Maybe<InventoryMeterWaterAggregatorAvg>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<InventoryMeterWaterAggregatorMax>
  min?: Maybe<InventoryMeterWaterAggregatorMin>
  sum?: Maybe<InventoryMeterWaterAggregatorSum>
  totalCount?: Maybe<Scalars['Int']>
}

export type InventoryMeterWaterAggregatorAvg = {
  __typename?: 'InventoryMeterWaterAggregatorAvg'
  lay_length?: Maybe<Scalars['Float']>
}

export type InventoryMeterWaterAggregatorMax = {
  __typename?: 'InventoryMeterWaterAggregatorMax'
  lay_length?: Maybe<Scalars['Float']>
}

export type InventoryMeterWaterAggregatorMin = {
  __typename?: 'InventoryMeterWaterAggregatorMin'
  lay_length?: Maybe<Scalars['Float']>
}

export type InventoryMeterWaterAggregatorSum = {
  __typename?: 'InventoryMeterWaterAggregatorSum'
  lay_length?: Maybe<Scalars['Float']>
}

export type InventoryMeterWaterConnection = {
  __typename?: 'InventoryMeterWaterConnection'
  aggregate?: Maybe<InventoryMeterWaterAggregator>
  groupBy?: Maybe<InventoryMeterWaterGroupBy>
  values?: Maybe<Array<Maybe<InventoryMeterWater>>>
}

export type InventoryMeterWaterConnectionCreated_At = {
  __typename?: 'InventoryMeterWaterConnectionCreated_at'
  connection?: Maybe<InventoryMeterWaterConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type InventoryMeterWaterConnectionDiameter_Nominal = {
  __typename?: 'InventoryMeterWaterConnectionDiameter_nominal'
  connection?: Maybe<InventoryMeterWaterConnection>
  key?: Maybe<Scalars['String']>
}

export type InventoryMeterWaterConnectionFlange = {
  __typename?: 'InventoryMeterWaterConnectionFlange'
  connection?: Maybe<InventoryMeterWaterConnection>
  key?: Maybe<Scalars['Boolean']>
}

export type InventoryMeterWaterConnectionFlowrate = {
  __typename?: 'InventoryMeterWaterConnectionFlowrate'
  connection?: Maybe<InventoryMeterWaterConnection>
  key?: Maybe<Scalars['String']>
}

export type InventoryMeterWaterConnectionHot_Water = {
  __typename?: 'InventoryMeterWaterConnectionHot_water'
  connection?: Maybe<InventoryMeterWaterConnection>
  key?: Maybe<Scalars['Boolean']>
}

export type InventoryMeterWaterConnectionId = {
  __typename?: 'InventoryMeterWaterConnectionId'
  connection?: Maybe<InventoryMeterWaterConnection>
  key?: Maybe<Scalars['ID']>
}

export type InventoryMeterWaterConnectionInventory_Meter = {
  __typename?: 'InventoryMeterWaterConnectionInventory_meter'
  connection?: Maybe<InventoryMeterWaterConnection>
  key?: Maybe<Scalars['ID']>
}

export type InventoryMeterWaterConnectionLay_Length = {
  __typename?: 'InventoryMeterWaterConnectionLay_length'
  connection?: Maybe<InventoryMeterWaterConnection>
  key?: Maybe<Scalars['Int']>
}

export type InventoryMeterWaterConnectionOrientation = {
  __typename?: 'InventoryMeterWaterConnectionOrientation'
  connection?: Maybe<InventoryMeterWaterConnection>
  key?: Maybe<Scalars['String']>
}

export type InventoryMeterWaterConnectionTube_Material = {
  __typename?: 'InventoryMeterWaterConnectionTube_material'
  connection?: Maybe<InventoryMeterWaterConnection>
  key?: Maybe<Scalars['String']>
}

export type InventoryMeterWaterConnectionUpdated_At = {
  __typename?: 'InventoryMeterWaterConnectionUpdated_at'
  connection?: Maybe<InventoryMeterWaterConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type InventoryMeterWaterConnectionWoltman = {
  __typename?: 'InventoryMeterWaterConnectionWoltman'
  connection?: Maybe<InventoryMeterWaterConnection>
  key?: Maybe<Scalars['Boolean']>
}

export type InventoryMeterWaterGroupBy = {
  __typename?: 'InventoryMeterWaterGroupBy'
  created_at?: Maybe<Array<Maybe<InventoryMeterWaterConnectionCreated_At>>>
  diameter_nominal?: Maybe<Array<Maybe<InventoryMeterWaterConnectionDiameter_Nominal>>>
  flange?: Maybe<Array<Maybe<InventoryMeterWaterConnectionFlange>>>
  flowrate?: Maybe<Array<Maybe<InventoryMeterWaterConnectionFlowrate>>>
  hot_water?: Maybe<Array<Maybe<InventoryMeterWaterConnectionHot_Water>>>
  id?: Maybe<Array<Maybe<InventoryMeterWaterConnectionId>>>
  inventory_meter?: Maybe<Array<Maybe<InventoryMeterWaterConnectionInventory_Meter>>>
  lay_length?: Maybe<Array<Maybe<InventoryMeterWaterConnectionLay_Length>>>
  orientation?: Maybe<Array<Maybe<InventoryMeterWaterConnectionOrientation>>>
  tube_material?: Maybe<Array<Maybe<InventoryMeterWaterConnectionTube_Material>>>
  updated_at?: Maybe<Array<Maybe<InventoryMeterWaterConnectionUpdated_At>>>
  woltman?: Maybe<Array<Maybe<InventoryMeterWaterConnectionWoltman>>>
}

export type InventoryMeterWaterInput = {
  created_by?: InputMaybe<Scalars['ID']>
  diameter_nominal?: InputMaybe<Enum_Inventorymeterwater_Diameter_Nominal>
  flange?: InputMaybe<Scalars['Boolean']>
  flowrate?: InputMaybe<Scalars['String']>
  hot_water?: InputMaybe<Scalars['Boolean']>
  inventory_meter?: InputMaybe<Scalars['ID']>
  lay_length?: InputMaybe<Scalars['Int']>
  orientation?: InputMaybe<Enum_Inventorymeterwater_Orientation>
  tube_material?: InputMaybe<Enum_Inventorymeterwater_Tube_Material>
  updated_by?: InputMaybe<Scalars['ID']>
  woltman?: InputMaybe<Scalars['Boolean']>
}

export type LocaleInput = {
  code?: InputMaybe<Scalars['String']>
  created_by?: InputMaybe<Scalars['ID']>
  name?: InputMaybe<Scalars['String']>
  updated_by?: InputMaybe<Scalars['ID']>
}

export type LoraDevice = {
  __typename?: 'LoraDevice'
  activation_type?: Maybe<Enum_Loradevice_Activation_Type>
  app_eui?: Maybe<Scalars['String']>
  app_key?: Maybe<Scalars['String']>
  app_s_key?: Maybe<Scalars['String']>
  created_at: Scalars['DateTime']
  dev_eui?: Maybe<Scalars['String']>
  device_address?: Maybe<Scalars['String']>
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  nwk_s_key?: Maybe<Scalars['String']>
  updated_at: Scalars['DateTime']
}

export type LoraDeviceAggregator = {
  __typename?: 'LoraDeviceAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type LoraDeviceConnection = {
  __typename?: 'LoraDeviceConnection'
  aggregate?: Maybe<LoraDeviceAggregator>
  groupBy?: Maybe<LoraDeviceGroupBy>
  values?: Maybe<Array<Maybe<LoraDevice>>>
}

export type LoraDeviceConnectionActivation_Type = {
  __typename?: 'LoraDeviceConnectionActivation_type'
  connection?: Maybe<LoraDeviceConnection>
  key?: Maybe<Scalars['String']>
}

export type LoraDeviceConnectionApp_Eui = {
  __typename?: 'LoraDeviceConnectionApp_eui'
  connection?: Maybe<LoraDeviceConnection>
  key?: Maybe<Scalars['String']>
}

export type LoraDeviceConnectionApp_Key = {
  __typename?: 'LoraDeviceConnectionApp_key'
  connection?: Maybe<LoraDeviceConnection>
  key?: Maybe<Scalars['String']>
}

export type LoraDeviceConnectionApp_S_Key = {
  __typename?: 'LoraDeviceConnectionApp_s_key'
  connection?: Maybe<LoraDeviceConnection>
  key?: Maybe<Scalars['String']>
}

export type LoraDeviceConnectionCreated_At = {
  __typename?: 'LoraDeviceConnectionCreated_at'
  connection?: Maybe<LoraDeviceConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type LoraDeviceConnectionDev_Eui = {
  __typename?: 'LoraDeviceConnectionDev_eui'
  connection?: Maybe<LoraDeviceConnection>
  key?: Maybe<Scalars['String']>
}

export type LoraDeviceConnectionDevice_Address = {
  __typename?: 'LoraDeviceConnectionDevice_address'
  connection?: Maybe<LoraDeviceConnection>
  key?: Maybe<Scalars['String']>
}

export type LoraDeviceConnectionId = {
  __typename?: 'LoraDeviceConnectionId'
  connection?: Maybe<LoraDeviceConnection>
  key?: Maybe<Scalars['ID']>
}

export type LoraDeviceConnectionName = {
  __typename?: 'LoraDeviceConnectionName'
  connection?: Maybe<LoraDeviceConnection>
  key?: Maybe<Scalars['String']>
}

export type LoraDeviceConnectionNwk_S_Key = {
  __typename?: 'LoraDeviceConnectionNwk_s_key'
  connection?: Maybe<LoraDeviceConnection>
  key?: Maybe<Scalars['String']>
}

export type LoraDeviceConnectionUpdated_At = {
  __typename?: 'LoraDeviceConnectionUpdated_at'
  connection?: Maybe<LoraDeviceConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type LoraDeviceGroupBy = {
  __typename?: 'LoraDeviceGroupBy'
  activation_type?: Maybe<Array<Maybe<LoraDeviceConnectionActivation_Type>>>
  app_eui?: Maybe<Array<Maybe<LoraDeviceConnectionApp_Eui>>>
  app_key?: Maybe<Array<Maybe<LoraDeviceConnectionApp_Key>>>
  app_s_key?: Maybe<Array<Maybe<LoraDeviceConnectionApp_S_Key>>>
  created_at?: Maybe<Array<Maybe<LoraDeviceConnectionCreated_At>>>
  dev_eui?: Maybe<Array<Maybe<LoraDeviceConnectionDev_Eui>>>
  device_address?: Maybe<Array<Maybe<LoraDeviceConnectionDevice_Address>>>
  id?: Maybe<Array<Maybe<LoraDeviceConnectionId>>>
  name?: Maybe<Array<Maybe<LoraDeviceConnectionName>>>
  nwk_s_key?: Maybe<Array<Maybe<LoraDeviceConnectionNwk_S_Key>>>
  updated_at?: Maybe<Array<Maybe<LoraDeviceConnectionUpdated_At>>>
}

export type LoraDeviceInput = {
  activation_type?: InputMaybe<Enum_Loradevice_Activation_Type>
  app_eui?: InputMaybe<Scalars['String']>
  app_key?: InputMaybe<Scalars['String']>
  app_s_key?: InputMaybe<Scalars['String']>
  created_by?: InputMaybe<Scalars['ID']>
  dev_eui?: InputMaybe<Scalars['String']>
  device_address?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  nwk_s_key?: InputMaybe<Scalars['String']>
  updated_by?: InputMaybe<Scalars['ID']>
}

export type Manufacturer = {
  __typename?: 'Manufacturer'
  avatar_url?: Maybe<Scalars['String']>
  created_at: Scalars['DateTime']
  id: Scalars['ID']
  meter_models?: Maybe<Array<Maybe<MeterModel>>>
  name?: Maybe<Scalars['String']>
  published_at?: Maybe<Scalars['DateTime']>
  updated_at: Scalars['DateTime']
  website?: Maybe<Scalars['String']>
}

export type ManufacturerMeter_ModelsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type ManufacturerAggregator = {
  __typename?: 'ManufacturerAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type ManufacturerConnection = {
  __typename?: 'ManufacturerConnection'
  aggregate?: Maybe<ManufacturerAggregator>
  groupBy?: Maybe<ManufacturerGroupBy>
  values?: Maybe<Array<Maybe<Manufacturer>>>
}

export type ManufacturerConnectionAvatar_Url = {
  __typename?: 'ManufacturerConnectionAvatar_url'
  connection?: Maybe<ManufacturerConnection>
  key?: Maybe<Scalars['String']>
}

export type ManufacturerConnectionCreated_At = {
  __typename?: 'ManufacturerConnectionCreated_at'
  connection?: Maybe<ManufacturerConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type ManufacturerConnectionId = {
  __typename?: 'ManufacturerConnectionId'
  connection?: Maybe<ManufacturerConnection>
  key?: Maybe<Scalars['ID']>
}

export type ManufacturerConnectionName = {
  __typename?: 'ManufacturerConnectionName'
  connection?: Maybe<ManufacturerConnection>
  key?: Maybe<Scalars['String']>
}

export type ManufacturerConnectionPublished_At = {
  __typename?: 'ManufacturerConnectionPublished_at'
  connection?: Maybe<ManufacturerConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type ManufacturerConnectionUpdated_At = {
  __typename?: 'ManufacturerConnectionUpdated_at'
  connection?: Maybe<ManufacturerConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type ManufacturerConnectionWebsite = {
  __typename?: 'ManufacturerConnectionWebsite'
  connection?: Maybe<ManufacturerConnection>
  key?: Maybe<Scalars['String']>
}

export type ManufacturerGroupBy = {
  __typename?: 'ManufacturerGroupBy'
  avatar_url?: Maybe<Array<Maybe<ManufacturerConnectionAvatar_Url>>>
  created_at?: Maybe<Array<Maybe<ManufacturerConnectionCreated_At>>>
  id?: Maybe<Array<Maybe<ManufacturerConnectionId>>>
  name?: Maybe<Array<Maybe<ManufacturerConnectionName>>>
  published_at?: Maybe<Array<Maybe<ManufacturerConnectionPublished_At>>>
  updated_at?: Maybe<Array<Maybe<ManufacturerConnectionUpdated_At>>>
  website?: Maybe<Array<Maybe<ManufacturerConnectionWebsite>>>
}

export type ManufacturerInput = {
  avatar_url?: InputMaybe<Scalars['String']>
  created_by?: InputMaybe<Scalars['ID']>
  meter_models?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  name?: InputMaybe<Scalars['String']>
  published_at?: InputMaybe<Scalars['DateTime']>
  updated_by?: InputMaybe<Scalars['ID']>
  website?: InputMaybe<Scalars['String']>
}

export type MeterAddon = {
  __typename?: 'MeterAddon'
  avatar_url?: Maybe<Scalars['String']>
  category?: Maybe<Enum_Meteraddon_Category>
  code?: Maybe<Scalars['String']>
  created_at: Scalars['DateTime']
  id: Scalars['ID']
  meter_models?: Maybe<Array<Maybe<MeterModel>>>
  name?: Maybe<Scalars['String']>
  note?: Maybe<Scalars['String']>
  priority?: Maybe<Scalars['Int']>
  published_at?: Maybe<Scalars['DateTime']>
  updated_at: Scalars['DateTime']
}

export type MeterAddonMeter_ModelsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type MeterAddonAggregator = {
  __typename?: 'MeterAddonAggregator'
  avg?: Maybe<MeterAddonAggregatorAvg>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<MeterAddonAggregatorMax>
  min?: Maybe<MeterAddonAggregatorMin>
  sum?: Maybe<MeterAddonAggregatorSum>
  totalCount?: Maybe<Scalars['Int']>
}

export type MeterAddonAggregatorAvg = {
  __typename?: 'MeterAddonAggregatorAvg'
  priority?: Maybe<Scalars['Float']>
}

export type MeterAddonAggregatorMax = {
  __typename?: 'MeterAddonAggregatorMax'
  priority?: Maybe<Scalars['Float']>
}

export type MeterAddonAggregatorMin = {
  __typename?: 'MeterAddonAggregatorMin'
  priority?: Maybe<Scalars['Float']>
}

export type MeterAddonAggregatorSum = {
  __typename?: 'MeterAddonAggregatorSum'
  priority?: Maybe<Scalars['Float']>
}

export type MeterAddonConnection = {
  __typename?: 'MeterAddonConnection'
  aggregate?: Maybe<MeterAddonAggregator>
  groupBy?: Maybe<MeterAddonGroupBy>
  values?: Maybe<Array<Maybe<MeterAddon>>>
}

export type MeterAddonConnectionAvatar_Url = {
  __typename?: 'MeterAddonConnectionAvatar_url'
  connection?: Maybe<MeterAddonConnection>
  key?: Maybe<Scalars['String']>
}

export type MeterAddonConnectionCategory = {
  __typename?: 'MeterAddonConnectionCategory'
  connection?: Maybe<MeterAddonConnection>
  key?: Maybe<Scalars['String']>
}

export type MeterAddonConnectionCode = {
  __typename?: 'MeterAddonConnectionCode'
  connection?: Maybe<MeterAddonConnection>
  key?: Maybe<Scalars['String']>
}

export type MeterAddonConnectionCreated_At = {
  __typename?: 'MeterAddonConnectionCreated_at'
  connection?: Maybe<MeterAddonConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type MeterAddonConnectionId = {
  __typename?: 'MeterAddonConnectionId'
  connection?: Maybe<MeterAddonConnection>
  key?: Maybe<Scalars['ID']>
}

export type MeterAddonConnectionName = {
  __typename?: 'MeterAddonConnectionName'
  connection?: Maybe<MeterAddonConnection>
  key?: Maybe<Scalars['String']>
}

export type MeterAddonConnectionNote = {
  __typename?: 'MeterAddonConnectionNote'
  connection?: Maybe<MeterAddonConnection>
  key?: Maybe<Scalars['String']>
}

export type MeterAddonConnectionPriority = {
  __typename?: 'MeterAddonConnectionPriority'
  connection?: Maybe<MeterAddonConnection>
  key?: Maybe<Scalars['Int']>
}

export type MeterAddonConnectionPublished_At = {
  __typename?: 'MeterAddonConnectionPublished_at'
  connection?: Maybe<MeterAddonConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type MeterAddonConnectionUpdated_At = {
  __typename?: 'MeterAddonConnectionUpdated_at'
  connection?: Maybe<MeterAddonConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type MeterAddonGroupBy = {
  __typename?: 'MeterAddonGroupBy'
  avatar_url?: Maybe<Array<Maybe<MeterAddonConnectionAvatar_Url>>>
  category?: Maybe<Array<Maybe<MeterAddonConnectionCategory>>>
  code?: Maybe<Array<Maybe<MeterAddonConnectionCode>>>
  created_at?: Maybe<Array<Maybe<MeterAddonConnectionCreated_At>>>
  id?: Maybe<Array<Maybe<MeterAddonConnectionId>>>
  name?: Maybe<Array<Maybe<MeterAddonConnectionName>>>
  note?: Maybe<Array<Maybe<MeterAddonConnectionNote>>>
  priority?: Maybe<Array<Maybe<MeterAddonConnectionPriority>>>
  published_at?: Maybe<Array<Maybe<MeterAddonConnectionPublished_At>>>
  updated_at?: Maybe<Array<Maybe<MeterAddonConnectionUpdated_At>>>
}

export type MeterAddonInput = {
  avatar_url?: InputMaybe<Scalars['String']>
  category?: InputMaybe<Enum_Meteraddon_Category>
  code?: InputMaybe<Scalars['String']>
  created_by?: InputMaybe<Scalars['ID']>
  meter_models?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  name?: InputMaybe<Scalars['String']>
  note?: InputMaybe<Scalars['String']>
  priority?: InputMaybe<Scalars['Int']>
  published_at?: InputMaybe<Scalars['DateTime']>
  updated_by?: InputMaybe<Scalars['ID']>
}

export type MeterModel = {
  __typename?: 'MeterModel'
  avatar_url?: Maybe<Scalars['String']>
  created_at: Scalars['DateTime']
  folder_drive_url?: Maybe<Scalars['String']>
  id: Scalars['ID']
  manufacturer?: Maybe<Manufacturer>
  meter_addons?: Maybe<Array<Maybe<MeterAddon>>>
  meter_type?: Maybe<Enum_Metermodel_Meter_Type>
  name?: Maybe<Scalars['String']>
  published_at?: Maybe<Scalars['DateTime']>
  updated_at: Scalars['DateTime']
  website?: Maybe<Scalars['String']>
}

export type MeterModelMeter_AddonsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type MeterModelAggregator = {
  __typename?: 'MeterModelAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type MeterModelConnection = {
  __typename?: 'MeterModelConnection'
  aggregate?: Maybe<MeterModelAggregator>
  groupBy?: Maybe<MeterModelGroupBy>
  values?: Maybe<Array<Maybe<MeterModel>>>
}

export type MeterModelConnectionAvatar_Url = {
  __typename?: 'MeterModelConnectionAvatar_url'
  connection?: Maybe<MeterModelConnection>
  key?: Maybe<Scalars['String']>
}

export type MeterModelConnectionCreated_At = {
  __typename?: 'MeterModelConnectionCreated_at'
  connection?: Maybe<MeterModelConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type MeterModelConnectionFolder_Drive_Url = {
  __typename?: 'MeterModelConnectionFolder_drive_url'
  connection?: Maybe<MeterModelConnection>
  key?: Maybe<Scalars['String']>
}

export type MeterModelConnectionId = {
  __typename?: 'MeterModelConnectionId'
  connection?: Maybe<MeterModelConnection>
  key?: Maybe<Scalars['ID']>
}

export type MeterModelConnectionManufacturer = {
  __typename?: 'MeterModelConnectionManufacturer'
  connection?: Maybe<MeterModelConnection>
  key?: Maybe<Scalars['ID']>
}

export type MeterModelConnectionMeter_Type = {
  __typename?: 'MeterModelConnectionMeter_type'
  connection?: Maybe<MeterModelConnection>
  key?: Maybe<Scalars['String']>
}

export type MeterModelConnectionName = {
  __typename?: 'MeterModelConnectionName'
  connection?: Maybe<MeterModelConnection>
  key?: Maybe<Scalars['String']>
}

export type MeterModelConnectionPublished_At = {
  __typename?: 'MeterModelConnectionPublished_at'
  connection?: Maybe<MeterModelConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type MeterModelConnectionUpdated_At = {
  __typename?: 'MeterModelConnectionUpdated_at'
  connection?: Maybe<MeterModelConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type MeterModelConnectionWebsite = {
  __typename?: 'MeterModelConnectionWebsite'
  connection?: Maybe<MeterModelConnection>
  key?: Maybe<Scalars['String']>
}

export type MeterModelGroupBy = {
  __typename?: 'MeterModelGroupBy'
  avatar_url?: Maybe<Array<Maybe<MeterModelConnectionAvatar_Url>>>
  created_at?: Maybe<Array<Maybe<MeterModelConnectionCreated_At>>>
  folder_drive_url?: Maybe<Array<Maybe<MeterModelConnectionFolder_Drive_Url>>>
  id?: Maybe<Array<Maybe<MeterModelConnectionId>>>
  manufacturer?: Maybe<Array<Maybe<MeterModelConnectionManufacturer>>>
  meter_type?: Maybe<Array<Maybe<MeterModelConnectionMeter_Type>>>
  name?: Maybe<Array<Maybe<MeterModelConnectionName>>>
  published_at?: Maybe<Array<Maybe<MeterModelConnectionPublished_At>>>
  updated_at?: Maybe<Array<Maybe<MeterModelConnectionUpdated_At>>>
  website?: Maybe<Array<Maybe<MeterModelConnectionWebsite>>>
}

export type MeterModelInput = {
  avatar_url?: InputMaybe<Scalars['String']>
  created_by?: InputMaybe<Scalars['ID']>
  folder_drive_url?: InputMaybe<Scalars['String']>
  manufacturer?: InputMaybe<Scalars['ID']>
  meter_addons?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  meter_type?: InputMaybe<Enum_Metermodel_Meter_Type>
  name?: InputMaybe<Scalars['String']>
  published_at?: InputMaybe<Scalars['DateTime']>
  updated_by?: InputMaybe<Scalars['ID']>
  website?: InputMaybe<Scalars['String']>
}

export type Morph =
  | Checkpoint
  | CheckpointAggregator
  | CheckpointAggregatorAvg
  | CheckpointAggregatorMax
  | CheckpointAggregatorMin
  | CheckpointAggregatorSum
  | CheckpointConnection
  | CheckpointConnectionCreated_At
  | CheckpointConnectionId
  | CheckpointConnectionInventory
  | CheckpointConnectionName
  | CheckpointConnectionOrder
  | CheckpointConnectionUpdated_At
  | CheckpointGroupBy
  | Country
  | CountryAggregator
  | CountryConnection
  | CountryConnectionCreated_At
  | CountryConnectionId
  | CountryConnectionName
  | CountryConnectionPublished_At
  | CountryConnectionShorthand
  | CountryConnectionUpdated_At
  | CountryGroupBy
  | EmissionFactor
  | EmissionFactorAggregator
  | EmissionFactorCategory
  | EmissionFactorCategoryAggregator
  | EmissionFactorCategoryAggregatorAvg
  | EmissionFactorCategoryAggregatorMax
  | EmissionFactorCategoryAggregatorMin
  | EmissionFactorCategoryAggregatorSum
  | EmissionFactorCategoryConnection
  | EmissionFactorCategoryConnectionCreated_At
  | EmissionFactorCategoryConnectionDescription
  | EmissionFactorCategoryConnectionId
  | EmissionFactorCategoryConnectionName
  | EmissionFactorCategoryConnectionPublished_At
  | EmissionFactorCategoryConnectionScope
  | EmissionFactorCategoryConnectionUpdated_At
  | EmissionFactorCategoryGroupBy
  | EmissionFactorConnection
  | EmissionFactorConnectionBase_Unit
  | EmissionFactorConnectionCreated_At
  | EmissionFactorConnectionEmission_Factor_Category
  | EmissionFactorConnectionId
  | EmissionFactorConnectionName
  | EmissionFactorConnectionPublished_At
  | EmissionFactorConnectionUpdated_At
  | EmissionFactorGroupBy
  | EmissionFactorValidity
  | EmissionFactorValidityAggregator
  | EmissionFactorValidityAggregatorAvg
  | EmissionFactorValidityAggregatorMax
  | EmissionFactorValidityAggregatorMin
  | EmissionFactorValidityAggregatorSum
  | EmissionFactorValidityConnection
  | EmissionFactorValidityConnectionCo2eq
  | EmissionFactorValidityConnectionCountry
  | EmissionFactorValidityConnectionCreated_At
  | EmissionFactorValidityConnectionEmission_Factor
  | EmissionFactorValidityConnectionId
  | EmissionFactorValidityConnectionPublished_At
  | EmissionFactorValidityConnectionSource
  | EmissionFactorValidityConnectionUpdated_At
  | EmissionFactorValidityConnectionValid_From
  | EmissionFactorValidityConnectionValid_To
  | EmissionFactorValidityGroupBy
  | FloorplanMetersByBuilding
  | I18NLocale
  | Inventory
  | InventoryAggregator
  | InventoryConnection
  | InventoryConnectionBackend_Gateway_Customer_Id
  | InventoryConnectionCreated_At
  | InventoryConnectionFolder_Drive_Id
  | InventoryConnectionId
  | InventoryConnectionName
  | InventoryConnectionNote
  | InventoryConnectionUpdated_At
  | InventoryGroupBy
  | InventoryLocation
  | InventoryLocationAggregator
  | InventoryLocationAggregatorAvg
  | InventoryLocationAggregatorMax
  | InventoryLocationAggregatorMin
  | InventoryLocationAggregatorSum
  | InventoryLocationBuilding
  | InventoryLocationBuildingAggregator
  | InventoryLocationBuildingAggregatorAvg
  | InventoryLocationBuildingAggregatorMax
  | InventoryLocationBuildingAggregatorMin
  | InventoryLocationBuildingAggregatorSum
  | InventoryLocationBuildingConnection
  | InventoryLocationBuildingConnectionAddress
  | InventoryLocationBuildingConnectionArea
  | InventoryLocationBuildingConnectionBackend_Gateway_Establishment_Id
  | InventoryLocationBuildingConnectionCode
  | InventoryLocationBuildingConnectionCreated_At
  | InventoryLocationBuildingConnectionExtra
  | InventoryLocationBuildingConnectionId
  | InventoryLocationBuildingConnectionInventory_Location
  | InventoryLocationBuildingConnectionName
  | InventoryLocationBuildingConnectionTags
  | InventoryLocationBuildingConnectionUpdated_At
  | InventoryLocationBuildingFloorplan
  | InventoryLocationBuildingFloorplanAggregator
  | InventoryLocationBuildingFloorplanAggregatorAvg
  | InventoryLocationBuildingFloorplanAggregatorMax
  | InventoryLocationBuildingFloorplanAggregatorMin
  | InventoryLocationBuildingFloorplanAggregatorSum
  | InventoryLocationBuildingFloorplanConnection
  | InventoryLocationBuildingFloorplanConnectionCreated_At
  | InventoryLocationBuildingFloorplanConnectionFile_Drive_Id
  | InventoryLocationBuildingFloorplanConnectionFloor
  | InventoryLocationBuildingFloorplanConnectionHeight
  | InventoryLocationBuildingFloorplanConnectionId
  | InventoryLocationBuildingFloorplanConnectionInventory_Location_Building
  | InventoryLocationBuildingFloorplanConnectionUpdated_At
  | InventoryLocationBuildingFloorplanConnectionWidth
  | InventoryLocationBuildingFloorplanGroupBy
  | InventoryLocationBuildingGroupBy
  | InventoryLocationConnection
  | InventoryLocationConnectionAddress
  | InventoryLocationConnectionApi_Key
  | InventoryLocationConnectionAvatar_Url
  | InventoryLocationConnectionBackend_Gateway_Customer_Id
  | InventoryLocationConnectionBackend_Gateway_Establishment_Id
  | InventoryLocationConnectionCreated_At
  | InventoryLocationConnectionFolder_Drive_Id
  | InventoryLocationConnectionId
  | InventoryLocationConnectionInventory
  | InventoryLocationConnectionLat
  | InventoryLocationConnectionLng
  | InventoryLocationConnectionName
  | InventoryLocationConnectionUpdated_At
  | InventoryLocationGroupBy
  | InventoryLocationOrder
  | InventoryLocationOrderAggregator
  | InventoryLocationOrderAggregatorAvg
  | InventoryLocationOrderAggregatorMax
  | InventoryLocationOrderAggregatorMin
  | InventoryLocationOrderAggregatorSum
  | InventoryLocationOrderConnection
  | InventoryLocationOrderConnectionAdmin_User
  | InventoryLocationOrderConnectionCreated_At
  | InventoryLocationOrderConnectionId
  | InventoryLocationOrderConnectionInventory_Location
  | InventoryLocationOrderConnectionInventory_Meter
  | InventoryLocationOrderConnectionMeter_Addon
  | InventoryLocationOrderConnectionQuantity
  | InventoryLocationOrderConnectionUpdated_At
  | InventoryLocationOrderGroupBy
  | InventoryMeter
  | InventoryMeterAggregator
  | InventoryMeterAggregatorAvg
  | InventoryMeterAggregatorMax
  | InventoryMeterAggregatorMin
  | InventoryMeterAggregatorSum
  | InventoryMeterApiKey
  | InventoryMeterApiKeyAggregator
  | InventoryMeterApiKeyConnection
  | InventoryMeterApiKeyConnectionAdmin_User
  | InventoryMeterApiKeyConnectionApi_Key
  | InventoryMeterApiKeyConnectionCreated_At
  | InventoryMeterApiKeyConnectionId
  | InventoryMeterApiKeyConnectionInventory_Meter
  | InventoryMeterApiKeyConnectionUpdated_At
  | InventoryMeterApiKeyGroupBy
  | InventoryMeterCheckpoint
  | InventoryMeterCheckpointAggregator
  | InventoryMeterCheckpointConnection
  | InventoryMeterCheckpointConnectionCheckpoint
  | InventoryMeterCheckpointConnectionCreated_At
  | InventoryMeterCheckpointConnectionId
  | InventoryMeterCheckpointConnectionInventory_Meter
  | InventoryMeterCheckpointConnectionSubmitted_At
  | InventoryMeterCheckpointConnectionUpdated_At
  | InventoryMeterCheckpointGroupBy
  | InventoryMeterConnection
  | InventoryMeterConnectionAccessibility
  | InventoryMeterConnectionBackend_Gateway_Meter_Id
  | InventoryMeterConnectionBuilding_Floor
  | InventoryMeterConnectionCalibrated
  | InventoryMeterConnectionCode
  | InventoryMeterConnectionCreated_At
  | InventoryMeterConnectionData_Source_Channel
  | InventoryMeterConnectionData_Source_Id
  | InventoryMeterConnectionFactor
  | InventoryMeterConnectionFloorplan_Lat
  | InventoryMeterConnectionFloorplan_Lng
  | InventoryMeterConnectionId
  | InventoryMeterConnectionInitial_Offset
  | InventoryMeterConnectionInstalled_At
  | InventoryMeterConnectionInstalled_By
  | InventoryMeterConnectionInventory_Location
  | InventoryMeterConnectionInventory_Location_Building
  | InventoryMeterConnectionInventory_Meter_Api_Key
  | InventoryMeterConnectionLat
  | InventoryMeterConnectionLng
  | InventoryMeterConnectionManufactured
  | InventoryMeterConnectionMeter_Model
  | InventoryMeterConnectionMeter_Mount_Type
  | InventoryMeterConnectionMeter_Type
  | InventoryMeterConnectionMonitored_Entity
  | InventoryMeterConnectionNew_Meter
  | InventoryMeterConnectionNote
  | InventoryMeterConnectionOwner
  | InventoryMeterConnectionOwner_Type
  | InventoryMeterConnectionRemote_Reading_Owner
  | InventoryMeterConnectionRemote_Reading_Serial
  | InventoryMeterConnectionRssi
  | InventoryMeterConnectionSerial_Number
  | InventoryMeterConnectionSubmeter
  | InventoryMeterConnectionSubmitted_At
  | InventoryMeterConnectionSubmitted_By
  | InventoryMeterConnectionTenant
  | InventoryMeterConnectionUnit
  | InventoryMeterConnectionUpdated_At
  | InventoryMeterElectricity
  | InventoryMeterElectricityAggregator
  | InventoryMeterElectricityAggregatorAvg
  | InventoryMeterElectricityAggregatorMax
  | InventoryMeterElectricityAggregatorMin
  | InventoryMeterElectricityAggregatorSum
  | InventoryMeterElectricityConnection
  | InventoryMeterElectricityConnectionCreated_At
  | InventoryMeterElectricityConnectionDevice_Category
  | InventoryMeterElectricityConnectionDirect
  | InventoryMeterElectricityConnectionI_Max
  | InventoryMeterElectricityConnectionI_Measured
  | InventoryMeterElectricityConnectionI_Range
  | InventoryMeterElectricityConnectionId
  | InventoryMeterElectricityConnectionInput_Spec
  | InventoryMeterElectricityConnectionInventory_Meter
  | InventoryMeterElectricityConnectionMct
  | InventoryMeterElectricityConnectionMounting
  | InventoryMeterElectricityConnectionPhases
  | InventoryMeterElectricityConnectionTariffs
  | InventoryMeterElectricityConnectionUpdated_At
  | InventoryMeterElectricityConnectionWidth
  | InventoryMeterElectricityGroupBy
  | InventoryMeterGas
  | InventoryMeterGasAggregator
  | InventoryMeterGasAggregatorAvg
  | InventoryMeterGasAggregatorMax
  | InventoryMeterGasAggregatorMin
  | InventoryMeterGasAggregatorSum
  | InventoryMeterGasConnection
  | InventoryMeterGasConnectionCreated_At
  | InventoryMeterGasConnectionDevice_Category
  | InventoryMeterGasConnectionDiameter_Nominal
  | InventoryMeterGasConnectionG_Size
  | InventoryMeterGasConnectionId
  | InventoryMeterGasConnectionInventory_Meter
  | InventoryMeterGasConnectionLay_Length
  | InventoryMeterGasConnectionOrientation
  | InventoryMeterGasConnectionP_Max
  | InventoryMeterGasConnectionQ_Max
  | InventoryMeterGasConnectionQ_Min
  | InventoryMeterGasConnectionRated_Power
  | InventoryMeterGasConnectionUpdated_At
  | InventoryMeterGasGroupBy
  | InventoryMeterGroupBy
  | InventoryMeterHeatCold
  | InventoryMeterHeatColdAggregator
  | InventoryMeterHeatColdAggregatorAvg
  | InventoryMeterHeatColdAggregatorMax
  | InventoryMeterHeatColdAggregatorMin
  | InventoryMeterHeatColdAggregatorSum
  | InventoryMeterHeatColdConnection
  | InventoryMeterHeatColdConnectionCreated_At
  | InventoryMeterHeatColdConnectionDiameter_Nominal
  | InventoryMeterHeatColdConnectionFlange
  | InventoryMeterHeatColdConnectionFlowrate
  | InventoryMeterHeatColdConnectionId
  | InventoryMeterHeatColdConnectionInstallation_Position
  | InventoryMeterHeatColdConnectionInventory_Meter
  | InventoryMeterHeatColdConnectionLay_Length
  | InventoryMeterHeatColdConnectionOrientation
  | InventoryMeterHeatColdConnectionResistance
  | InventoryMeterHeatColdConnectionUpdated_At
  | InventoryMeterHeatColdGroupBy
  | InventoryMeterOther
  | InventoryMeterOtherAggregator
  | InventoryMeterOtherConnection
  | InventoryMeterOtherConnectionCreated_At
  | InventoryMeterOtherConnectionDevice_Category
  | InventoryMeterOtherConnectionId
  | InventoryMeterOtherConnectionInventory_Meter
  | InventoryMeterOtherConnectionUpdated_At
  | InventoryMeterOtherGroupBy
  | InventoryMeterPhoto
  | InventoryMeterPhotoAggregator
  | InventoryMeterPhotoConnection
  | InventoryMeterPhotoConnectionCreated_At
  | InventoryMeterPhotoConnectionFile_Drive_Id
  | InventoryMeterPhotoConnectionId
  | InventoryMeterPhotoConnectionInventory_Meter
  | InventoryMeterPhotoConnectionType
  | InventoryMeterPhotoConnectionUpdated_At
  | InventoryMeterPhotoGroupBy
  | InventoryMeterReading
  | InventoryMeterReadingAggregator
  | InventoryMeterReadingAggregatorAvg
  | InventoryMeterReadingAggregatorMax
  | InventoryMeterReadingAggregatorMin
  | InventoryMeterReadingAggregatorSum
  | InventoryMeterReadingConnection
  | InventoryMeterReadingConnectionCounter
  | InventoryMeterReadingConnectionCreated_At
  | InventoryMeterReadingConnectionDate
  | InventoryMeterReadingConnectionId
  | InventoryMeterReadingConnectionInventory_Meter
  | InventoryMeterReadingConnectionPublished_At
  | InventoryMeterReadingConnectionUpdated_At
  | InventoryMeterReadingGroupBy
  | InventoryMeterWater
  | InventoryMeterWaterAggregator
  | InventoryMeterWaterAggregatorAvg
  | InventoryMeterWaterAggregatorMax
  | InventoryMeterWaterAggregatorMin
  | InventoryMeterWaterAggregatorSum
  | InventoryMeterWaterConnection
  | InventoryMeterWaterConnectionCreated_At
  | InventoryMeterWaterConnectionDiameter_Nominal
  | InventoryMeterWaterConnectionFlange
  | InventoryMeterWaterConnectionFlowrate
  | InventoryMeterWaterConnectionHot_Water
  | InventoryMeterWaterConnectionId
  | InventoryMeterWaterConnectionInventory_Meter
  | InventoryMeterWaterConnectionLay_Length
  | InventoryMeterWaterConnectionOrientation
  | InventoryMeterWaterConnectionTube_Material
  | InventoryMeterWaterConnectionUpdated_At
  | InventoryMeterWaterConnectionWoltman
  | InventoryMeterWaterGroupBy
  | LoraDevice
  | LoraDeviceAggregator
  | LoraDeviceConnection
  | LoraDeviceConnectionActivation_Type
  | LoraDeviceConnectionApp_Eui
  | LoraDeviceConnectionApp_Key
  | LoraDeviceConnectionApp_S_Key
  | LoraDeviceConnectionCreated_At
  | LoraDeviceConnectionDev_Eui
  | LoraDeviceConnectionDevice_Address
  | LoraDeviceConnectionId
  | LoraDeviceConnectionName
  | LoraDeviceConnectionNwk_S_Key
  | LoraDeviceConnectionUpdated_At
  | LoraDeviceGroupBy
  | Manufacturer
  | ManufacturerAggregator
  | ManufacturerConnection
  | ManufacturerConnectionAvatar_Url
  | ManufacturerConnectionCreated_At
  | ManufacturerConnectionId
  | ManufacturerConnectionName
  | ManufacturerConnectionPublished_At
  | ManufacturerConnectionUpdated_At
  | ManufacturerConnectionWebsite
  | ManufacturerGroupBy
  | MeterAddon
  | MeterAddonAggregator
  | MeterAddonAggregatorAvg
  | MeterAddonAggregatorMax
  | MeterAddonAggregatorMin
  | MeterAddonAggregatorSum
  | MeterAddonConnection
  | MeterAddonConnectionAvatar_Url
  | MeterAddonConnectionCategory
  | MeterAddonConnectionCode
  | MeterAddonConnectionCreated_At
  | MeterAddonConnectionId
  | MeterAddonConnectionName
  | MeterAddonConnectionNote
  | MeterAddonConnectionPriority
  | MeterAddonConnectionPublished_At
  | MeterAddonConnectionUpdated_At
  | MeterAddonGroupBy
  | MeterModel
  | MeterModelAggregator
  | MeterModelConnection
  | MeterModelConnectionAvatar_Url
  | MeterModelConnectionCreated_At
  | MeterModelConnectionFolder_Drive_Url
  | MeterModelConnectionId
  | MeterModelConnectionManufacturer
  | MeterModelConnectionMeter_Type
  | MeterModelConnectionName
  | MeterModelConnectionPublished_At
  | MeterModelConnectionUpdated_At
  | MeterModelConnectionWebsite
  | MeterModelGroupBy
  | Revision
  | RevisionAggregator
  | RevisionAggregatorAvg
  | RevisionAggregatorMax
  | RevisionAggregatorMin
  | RevisionAggregatorSum
  | RevisionConnection
  | RevisionConnectionAction
  | RevisionConnectionCollection_Id
  | RevisionConnectionCollection_Name
  | RevisionConnectionCreated_At
  | RevisionConnectionData
  | RevisionConnectionId
  | RevisionConnectionUpdated_At
  | RevisionGroupBy
  | ThirdParty
  | ThirdPartyAggregator
  | ThirdPartyConnection
  | ThirdPartyConnectionCompany_Number
  | ThirdPartyConnectionCountry
  | ThirdPartyConnectionCreated_At
  | ThirdPartyConnectionId
  | ThirdPartyConnectionName
  | ThirdPartyConnectionPublished_At
  | ThirdPartyConnectionType
  | ThirdPartyConnectionUpdated_At
  | ThirdPartyGroupBy
  | Token
  | TokenAggregator
  | TokenConnection
  | TokenConnectionCreated_At
  | TokenConnectionId
  | TokenConnectionPublished_At
  | TokenConnectionToken
  | TokenConnectionUpdated_At
  | TokenConnectionUser
  | TokenGroupBy
  | Unit
  | UnitAggregator
  | UnitConnection
  | UnitConnectionCreated_At
  | UnitConnectionEnum
  | UnitConnectionId
  | UnitConnectionName
  | UnitConnectionPublished_At
  | UnitConnectionReadable
  | UnitConnectionUpdated_At
  | UnitGroupBy
  | UploadFile
  | UploadFileAggregator
  | UploadFileAggregatorAvg
  | UploadFileAggregatorMax
  | UploadFileAggregatorMin
  | UploadFileAggregatorSum
  | UploadFileConnection
  | UploadFileConnectionAlternativeText
  | UploadFileConnectionCaption
  | UploadFileConnectionCreated_At
  | UploadFileConnectionExt
  | UploadFileConnectionFormats
  | UploadFileConnectionHash
  | UploadFileConnectionHeight
  | UploadFileConnectionId
  | UploadFileConnectionMime
  | UploadFileConnectionName
  | UploadFileConnectionPreviewUrl
  | UploadFileConnectionProvider
  | UploadFileConnectionProvider_Metadata
  | UploadFileConnectionSize
  | UploadFileConnectionUpdated_At
  | UploadFileConnectionUrl
  | UploadFileConnectionWidth
  | UploadFileGroupBy
  | UserPermissionsPasswordPayload
  | UsersPermissionsLoginPayload
  | UsersPermissionsMe
  | UsersPermissionsMeRole
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsRoleAggregator
  | UsersPermissionsRoleConnection
  | UsersPermissionsRoleConnectionDescription
  | UsersPermissionsRoleConnectionId
  | UsersPermissionsRoleConnectionName
  | UsersPermissionsRoleConnectionType
  | UsersPermissionsRoleGroupBy
  | UsersPermissionsUser
  | UsersPermissionsUserAggregator
  | UsersPermissionsUserConnection
  | UsersPermissionsUserConnectionBlocked
  | UsersPermissionsUserConnectionConfirmed
  | UsersPermissionsUserConnectionCreated_At
  | UsersPermissionsUserConnectionEmail
  | UsersPermissionsUserConnectionId
  | UsersPermissionsUserConnectionProvider
  | UsersPermissionsUserConnectionRole
  | UsersPermissionsUserConnectionToken
  | UsersPermissionsUserConnectionUpdated_At
  | UsersPermissionsUserConnectionUsername
  | UsersPermissionsUserGroupBy
  | CreateCheckpointPayload
  | CreateCountryPayload
  | CreateEmissionFactorCategoryPayload
  | CreateEmissionFactorPayload
  | CreateEmissionFactorValidityPayload
  | CreateInventoryLocationBuildingFloorplanPayload
  | CreateInventoryLocationBuildingPayload
  | CreateInventoryLocationOrderPayload
  | CreateInventoryLocationPayload
  | CreateInventoryMeterApiKeyPayload
  | CreateInventoryMeterCheckpointPayload
  | CreateInventoryMeterElectricityPayload
  | CreateInventoryMeterGasPayload
  | CreateInventoryMeterHeatColdPayload
  | CreateInventoryMeterOtherPayload
  | CreateInventoryMeterPayload
  | CreateInventoryMeterPhotoPayload
  | CreateInventoryMeterReadingPayload
  | CreateInventoryMeterWaterPayload
  | CreateInventoryPayload
  | CreateLoraDevicePayload
  | CreateManufacturerPayload
  | CreateMeterAddonPayload
  | CreateMeterModelPayload
  | CreateRevisionPayload
  | CreateRolePayload
  | CreateThirdPartyPayload
  | CreateTokenPayload
  | CreateUnitPayload
  | CreateUserPayload
  | DeleteCheckpointPayload
  | DeleteCountryPayload
  | DeleteEmissionFactorCategoryPayload
  | DeleteEmissionFactorPayload
  | DeleteEmissionFactorValidityPayload
  | DeleteFilePayload
  | DeleteInventoryLocationBuildingFloorplanPayload
  | DeleteInventoryLocationBuildingPayload
  | DeleteInventoryLocationOrderPayload
  | DeleteInventoryLocationPayload
  | DeleteInventoryMeterApiKeyPayload
  | DeleteInventoryMeterCheckpointPayload
  | DeleteInventoryMeterElectricityPayload
  | DeleteInventoryMeterGasPayload
  | DeleteInventoryMeterHeatColdPayload
  | DeleteInventoryMeterOtherPayload
  | DeleteInventoryMeterPayload
  | DeleteInventoryMeterPhotoPayload
  | DeleteInventoryMeterReadingPayload
  | DeleteInventoryMeterWaterPayload
  | DeleteInventoryPayload
  | DeleteLoraDevicePayload
  | DeleteManufacturerPayload
  | DeleteMeterAddonPayload
  | DeleteMeterModelPayload
  | DeleteRevisionPayload
  | DeleteRolePayload
  | DeleteThirdPartyPayload
  | DeleteTokenPayload
  | DeleteUnitPayload
  | DeleteUserPayload
  | UpdateCheckpointPayload
  | UpdateCountryPayload
  | UpdateEmissionFactorCategoryPayload
  | UpdateEmissionFactorPayload
  | UpdateEmissionFactorValidityPayload
  | UpdateInventoryLocationBuildingFloorplanPayload
  | UpdateInventoryLocationBuildingPayload
  | UpdateInventoryLocationOrderPayload
  | UpdateInventoryLocationPayload
  | UpdateInventoryMeterApiKeyPayload
  | UpdateInventoryMeterCheckpointPayload
  | UpdateInventoryMeterElectricityPayload
  | UpdateInventoryMeterGasPayload
  | UpdateInventoryMeterHeatColdPayload
  | UpdateInventoryMeterOtherPayload
  | UpdateInventoryMeterPayload
  | UpdateInventoryMeterPhotoPayload
  | UpdateInventoryMeterReadingPayload
  | UpdateInventoryMeterWaterPayload
  | UpdateInventoryPayload
  | UpdateLoraDevicePayload
  | UpdateManufacturerPayload
  | UpdateMeterAddonPayload
  | UpdateMeterModelPayload
  | UpdateRevisionPayload
  | UpdateRolePayload
  | UpdateThirdPartyPayload
  | UpdateTokenPayload
  | UpdateUnitPayload
  | UpdateUserPayload

export type Mutation = {
  __typename?: 'Mutation'
  createCheckpoint?: Maybe<CreateCheckpointPayload>
  createCountry?: Maybe<CreateCountryPayload>
  createEmissionFactor?: Maybe<CreateEmissionFactorPayload>
  createEmissionFactorCategory?: Maybe<CreateEmissionFactorCategoryPayload>
  createEmissionFactorValidity?: Maybe<CreateEmissionFactorValidityPayload>
  createInventory?: Maybe<CreateInventoryPayload>
  createInventoryLocation?: Maybe<CreateInventoryLocationPayload>
  createInventoryLocationBuilding?: Maybe<CreateInventoryLocationBuildingPayload>
  createInventoryLocationBuildingFloorplan?: Maybe<CreateInventoryLocationBuildingFloorplanPayload>
  createInventoryLocationOrder?: Maybe<CreateInventoryLocationOrderPayload>
  createInventoryMeter?: Maybe<CreateInventoryMeterPayload>
  createInventoryMeterApiKey?: Maybe<CreateInventoryMeterApiKeyPayload>
  createInventoryMeterCheckpoint?: Maybe<CreateInventoryMeterCheckpointPayload>
  createInventoryMeterElectricity?: Maybe<CreateInventoryMeterElectricityPayload>
  createInventoryMeterGas?: Maybe<CreateInventoryMeterGasPayload>
  createInventoryMeterHeatCold?: Maybe<CreateInventoryMeterHeatColdPayload>
  createInventoryMeterOther?: Maybe<CreateInventoryMeterOtherPayload>
  createInventoryMeterPhoto?: Maybe<CreateInventoryMeterPhotoPayload>
  createInventoryMeterReading?: Maybe<CreateInventoryMeterReadingPayload>
  createInventoryMeterWater?: Maybe<CreateInventoryMeterWaterPayload>
  createLoraDevice?: Maybe<CreateLoraDevicePayload>
  createManufacturer?: Maybe<CreateManufacturerPayload>
  createMeterAddon?: Maybe<CreateMeterAddonPayload>
  createMeterModel?: Maybe<CreateMeterModelPayload>
  createRevision?: Maybe<CreateRevisionPayload>
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>
  createThirdParty?: Maybe<CreateThirdPartyPayload>
  createToken?: Maybe<CreateTokenPayload>
  createUnit?: Maybe<CreateUnitPayload>
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>
  deleteCheckpoint?: Maybe<DeleteCheckpointPayload>
  deleteCountry?: Maybe<DeleteCountryPayload>
  deleteEmissionFactor?: Maybe<DeleteEmissionFactorPayload>
  deleteEmissionFactorCategory?: Maybe<DeleteEmissionFactorCategoryPayload>
  deleteEmissionFactorValidity?: Maybe<DeleteEmissionFactorValidityPayload>
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>
  deleteInventory?: Maybe<DeleteInventoryPayload>
  deleteInventoryLocation?: Maybe<DeleteInventoryLocationPayload>
  deleteInventoryLocationBuilding?: Maybe<DeleteInventoryLocationBuildingPayload>
  deleteInventoryLocationBuildingFloorplan?: Maybe<DeleteInventoryLocationBuildingFloorplanPayload>
  deleteInventoryLocationOrder?: Maybe<DeleteInventoryLocationOrderPayload>
  deleteInventoryMeter?: Maybe<DeleteInventoryMeterPayload>
  deleteInventoryMeterApiKey?: Maybe<DeleteInventoryMeterApiKeyPayload>
  deleteInventoryMeterCheckpoint?: Maybe<DeleteInventoryMeterCheckpointPayload>
  deleteInventoryMeterElectricity?: Maybe<DeleteInventoryMeterElectricityPayload>
  deleteInventoryMeterGas?: Maybe<DeleteInventoryMeterGasPayload>
  deleteInventoryMeterHeatCold?: Maybe<DeleteInventoryMeterHeatColdPayload>
  deleteInventoryMeterOther?: Maybe<DeleteInventoryMeterOtherPayload>
  deleteInventoryMeterPhoto?: Maybe<DeleteInventoryMeterPhotoPayload>
  deleteInventoryMeterReading?: Maybe<DeleteInventoryMeterReadingPayload>
  deleteInventoryMeterWater?: Maybe<DeleteInventoryMeterWaterPayload>
  deleteLoraDevice?: Maybe<DeleteLoraDevicePayload>
  deleteManufacturer?: Maybe<DeleteManufacturerPayload>
  deleteMeterAddon?: Maybe<DeleteMeterAddonPayload>
  deleteMeterModel?: Maybe<DeleteMeterModelPayload>
  deleteRevision?: Maybe<DeleteRevisionPayload>
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>
  deleteThirdParty?: Maybe<DeleteThirdPartyPayload>
  deleteToken?: Maybe<DeleteTokenPayload>
  deleteUnit?: Maybe<DeleteUnitPayload>
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>
  login: UsersPermissionsLoginPayload
  multipleUpload: Array<Maybe<UploadFile>>
  register: UsersPermissionsLoginPayload
  resetPassword?: Maybe<UsersPermissionsLoginPayload>
  updateCheckpoint?: Maybe<UpdateCheckpointPayload>
  updateCountry?: Maybe<UpdateCountryPayload>
  updateEmissionFactor?: Maybe<UpdateEmissionFactorPayload>
  updateEmissionFactorCategory?: Maybe<UpdateEmissionFactorCategoryPayload>
  updateEmissionFactorValidity?: Maybe<UpdateEmissionFactorValidityPayload>
  updateFileInfo: UploadFile
  updateInventory?: Maybe<UpdateInventoryPayload>
  updateInventoryLocation?: Maybe<UpdateInventoryLocationPayload>
  updateInventoryLocationBuilding?: Maybe<UpdateInventoryLocationBuildingPayload>
  updateInventoryLocationBuildingFloorplan?: Maybe<UpdateInventoryLocationBuildingFloorplanPayload>
  updateInventoryLocationOrder?: Maybe<UpdateInventoryLocationOrderPayload>
  updateInventoryMeter?: Maybe<UpdateInventoryMeterPayload>
  updateInventoryMeterApiKey?: Maybe<UpdateInventoryMeterApiKeyPayload>
  updateInventoryMeterCheckpoint?: Maybe<UpdateInventoryMeterCheckpointPayload>
  updateInventoryMeterElectricity?: Maybe<UpdateInventoryMeterElectricityPayload>
  updateInventoryMeterGas?: Maybe<UpdateInventoryMeterGasPayload>
  updateInventoryMeterHeatCold?: Maybe<UpdateInventoryMeterHeatColdPayload>
  updateInventoryMeterOther?: Maybe<UpdateInventoryMeterOtherPayload>
  updateInventoryMeterPhoto?: Maybe<UpdateInventoryMeterPhotoPayload>
  updateInventoryMeterReading?: Maybe<UpdateInventoryMeterReadingPayload>
  updateInventoryMeterWater?: Maybe<UpdateInventoryMeterWaterPayload>
  updateLoraDevice?: Maybe<UpdateLoraDevicePayload>
  updateManufacturer?: Maybe<UpdateManufacturerPayload>
  updateMeterAddon?: Maybe<UpdateMeterAddonPayload>
  updateMeterModel?: Maybe<UpdateMeterModelPayload>
  updateRevision?: Maybe<UpdateRevisionPayload>
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>
  updateThirdParty?: Maybe<UpdateThirdPartyPayload>
  updateToken?: Maybe<UpdateTokenPayload>
  updateUnit?: Maybe<UpdateUnitPayload>
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>
  upload: UploadFile
}

export type MutationCreateCheckpointArgs = {
  input?: InputMaybe<CreateCheckpointInput>
}

export type MutationCreateCountryArgs = {
  input?: InputMaybe<CreateCountryInput>
}

export type MutationCreateEmissionFactorArgs = {
  input?: InputMaybe<CreateEmissionFactorInput>
}

export type MutationCreateEmissionFactorCategoryArgs = {
  input?: InputMaybe<CreateEmissionFactorCategoryInput>
}

export type MutationCreateEmissionFactorValidityArgs = {
  input?: InputMaybe<CreateEmissionFactorValidityInput>
}

export type MutationCreateInventoryArgs = {
  input?: InputMaybe<CreateInventoryInput>
}

export type MutationCreateInventoryLocationArgs = {
  input?: InputMaybe<CreateInventoryLocationInput>
}

export type MutationCreateInventoryLocationBuildingArgs = {
  input?: InputMaybe<CreateInventoryLocationBuildingInput>
}

export type MutationCreateInventoryLocationBuildingFloorplanArgs = {
  input?: InputMaybe<CreateInventoryLocationBuildingFloorplanInput>
}

export type MutationCreateInventoryLocationOrderArgs = {
  input?: InputMaybe<CreateInventoryLocationOrderInput>
}

export type MutationCreateInventoryMeterArgs = {
  input?: InputMaybe<CreateInventoryMeterInput>
}

export type MutationCreateInventoryMeterApiKeyArgs = {
  input?: InputMaybe<CreateInventoryMeterApiKeyInput>
}

export type MutationCreateInventoryMeterCheckpointArgs = {
  input?: InputMaybe<CreateInventoryMeterCheckpointInput>
}

export type MutationCreateInventoryMeterElectricityArgs = {
  input?: InputMaybe<CreateInventoryMeterElectricityInput>
}

export type MutationCreateInventoryMeterGasArgs = {
  input?: InputMaybe<CreateInventoryMeterGasInput>
}

export type MutationCreateInventoryMeterHeatColdArgs = {
  input?: InputMaybe<CreateInventoryMeterHeatColdInput>
}

export type MutationCreateInventoryMeterOtherArgs = {
  input?: InputMaybe<CreateInventoryMeterOtherInput>
}

export type MutationCreateInventoryMeterPhotoArgs = {
  input?: InputMaybe<CreateInventoryMeterPhotoInput>
}

export type MutationCreateInventoryMeterReadingArgs = {
  input?: InputMaybe<CreateInventoryMeterReadingInput>
}

export type MutationCreateInventoryMeterWaterArgs = {
  input?: InputMaybe<CreateInventoryMeterWaterInput>
}

export type MutationCreateLoraDeviceArgs = {
  input?: InputMaybe<CreateLoraDeviceInput>
}

export type MutationCreateManufacturerArgs = {
  input?: InputMaybe<CreateManufacturerInput>
}

export type MutationCreateMeterAddonArgs = {
  input?: InputMaybe<CreateMeterAddonInput>
}

export type MutationCreateMeterModelArgs = {
  input?: InputMaybe<CreateMeterModelInput>
}

export type MutationCreateRevisionArgs = {
  input?: InputMaybe<CreateRevisionInput>
}

export type MutationCreateRoleArgs = {
  input?: InputMaybe<CreateRoleInput>
}

export type MutationCreateThirdPartyArgs = {
  input?: InputMaybe<CreateThirdPartyInput>
}

export type MutationCreateTokenArgs = {
  input?: InputMaybe<CreateTokenInput>
}

export type MutationCreateUnitArgs = {
  input?: InputMaybe<CreateUnitInput>
}

export type MutationCreateUserArgs = {
  input?: InputMaybe<CreateUserInput>
}

export type MutationDeleteCheckpointArgs = {
  input?: InputMaybe<DeleteCheckpointInput>
}

export type MutationDeleteCountryArgs = {
  input?: InputMaybe<DeleteCountryInput>
}

export type MutationDeleteEmissionFactorArgs = {
  input?: InputMaybe<DeleteEmissionFactorInput>
}

export type MutationDeleteEmissionFactorCategoryArgs = {
  input?: InputMaybe<DeleteEmissionFactorCategoryInput>
}

export type MutationDeleteEmissionFactorValidityArgs = {
  input?: InputMaybe<DeleteEmissionFactorValidityInput>
}

export type MutationDeleteFileArgs = {
  input?: InputMaybe<DeleteFileInput>
}

export type MutationDeleteInventoryArgs = {
  input?: InputMaybe<DeleteInventoryInput>
}

export type MutationDeleteInventoryLocationArgs = {
  input?: InputMaybe<DeleteInventoryLocationInput>
}

export type MutationDeleteInventoryLocationBuildingArgs = {
  input?: InputMaybe<DeleteInventoryLocationBuildingInput>
}

export type MutationDeleteInventoryLocationBuildingFloorplanArgs = {
  input?: InputMaybe<DeleteInventoryLocationBuildingFloorplanInput>
}

export type MutationDeleteInventoryLocationOrderArgs = {
  input?: InputMaybe<DeleteInventoryLocationOrderInput>
}

export type MutationDeleteInventoryMeterArgs = {
  input?: InputMaybe<DeleteInventoryMeterInput>
}

export type MutationDeleteInventoryMeterApiKeyArgs = {
  input?: InputMaybe<DeleteInventoryMeterApiKeyInput>
}

export type MutationDeleteInventoryMeterCheckpointArgs = {
  input?: InputMaybe<DeleteInventoryMeterCheckpointInput>
}

export type MutationDeleteInventoryMeterElectricityArgs = {
  input?: InputMaybe<DeleteInventoryMeterElectricityInput>
}

export type MutationDeleteInventoryMeterGasArgs = {
  input?: InputMaybe<DeleteInventoryMeterGasInput>
}

export type MutationDeleteInventoryMeterHeatColdArgs = {
  input?: InputMaybe<DeleteInventoryMeterHeatColdInput>
}

export type MutationDeleteInventoryMeterOtherArgs = {
  input?: InputMaybe<DeleteInventoryMeterOtherInput>
}

export type MutationDeleteInventoryMeterPhotoArgs = {
  input?: InputMaybe<DeleteInventoryMeterPhotoInput>
}

export type MutationDeleteInventoryMeterReadingArgs = {
  input?: InputMaybe<DeleteInventoryMeterReadingInput>
}

export type MutationDeleteInventoryMeterWaterArgs = {
  input?: InputMaybe<DeleteInventoryMeterWaterInput>
}

export type MutationDeleteLoraDeviceArgs = {
  input?: InputMaybe<DeleteLoraDeviceInput>
}

export type MutationDeleteManufacturerArgs = {
  input?: InputMaybe<DeleteManufacturerInput>
}

export type MutationDeleteMeterAddonArgs = {
  input?: InputMaybe<DeleteMeterAddonInput>
}

export type MutationDeleteMeterModelArgs = {
  input?: InputMaybe<DeleteMeterModelInput>
}

export type MutationDeleteRevisionArgs = {
  input?: InputMaybe<DeleteRevisionInput>
}

export type MutationDeleteRoleArgs = {
  input?: InputMaybe<DeleteRoleInput>
}

export type MutationDeleteThirdPartyArgs = {
  input?: InputMaybe<DeleteThirdPartyInput>
}

export type MutationDeleteTokenArgs = {
  input?: InputMaybe<DeleteTokenInput>
}

export type MutationDeleteUnitArgs = {
  input?: InputMaybe<DeleteUnitInput>
}

export type MutationDeleteUserArgs = {
  input?: InputMaybe<DeleteUserInput>
}

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']
}

export type MutationForgotPasswordArgs = {
  email: Scalars['String']
}

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput
}

export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>
  files: Array<InputMaybe<Scalars['Upload']>>
  ref?: InputMaybe<Scalars['String']>
  refId?: InputMaybe<Scalars['ID']>
  source?: InputMaybe<Scalars['String']>
}

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput
}

export type MutationResetPasswordArgs = {
  code: Scalars['String']
  password: Scalars['String']
  passwordConfirmation: Scalars['String']
}

export type MutationUpdateCheckpointArgs = {
  input?: InputMaybe<UpdateCheckpointInput>
}

export type MutationUpdateCountryArgs = {
  input?: InputMaybe<UpdateCountryInput>
}

export type MutationUpdateEmissionFactorArgs = {
  input?: InputMaybe<UpdateEmissionFactorInput>
}

export type MutationUpdateEmissionFactorCategoryArgs = {
  input?: InputMaybe<UpdateEmissionFactorCategoryInput>
}

export type MutationUpdateEmissionFactorValidityArgs = {
  input?: InputMaybe<UpdateEmissionFactorValidityInput>
}

export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']
  info: FileInfoInput
}

export type MutationUpdateInventoryArgs = {
  input?: InputMaybe<UpdateInventoryInput>
}

export type MutationUpdateInventoryLocationArgs = {
  input?: InputMaybe<UpdateInventoryLocationInput>
}

export type MutationUpdateInventoryLocationBuildingArgs = {
  input?: InputMaybe<UpdateInventoryLocationBuildingInput>
}

export type MutationUpdateInventoryLocationBuildingFloorplanArgs = {
  input?: InputMaybe<UpdateInventoryLocationBuildingFloorplanInput>
}

export type MutationUpdateInventoryLocationOrderArgs = {
  input?: InputMaybe<UpdateInventoryLocationOrderInput>
}

export type MutationUpdateInventoryMeterArgs = {
  input?: InputMaybe<UpdateInventoryMeterInput>
}

export type MutationUpdateInventoryMeterApiKeyArgs = {
  input?: InputMaybe<UpdateInventoryMeterApiKeyInput>
}

export type MutationUpdateInventoryMeterCheckpointArgs = {
  input?: InputMaybe<UpdateInventoryMeterCheckpointInput>
}

export type MutationUpdateInventoryMeterElectricityArgs = {
  input?: InputMaybe<UpdateInventoryMeterElectricityInput>
}

export type MutationUpdateInventoryMeterGasArgs = {
  input?: InputMaybe<UpdateInventoryMeterGasInput>
}

export type MutationUpdateInventoryMeterHeatColdArgs = {
  input?: InputMaybe<UpdateInventoryMeterHeatColdInput>
}

export type MutationUpdateInventoryMeterOtherArgs = {
  input?: InputMaybe<UpdateInventoryMeterOtherInput>
}

export type MutationUpdateInventoryMeterPhotoArgs = {
  input?: InputMaybe<UpdateInventoryMeterPhotoInput>
}

export type MutationUpdateInventoryMeterReadingArgs = {
  input?: InputMaybe<UpdateInventoryMeterReadingInput>
}

export type MutationUpdateInventoryMeterWaterArgs = {
  input?: InputMaybe<UpdateInventoryMeterWaterInput>
}

export type MutationUpdateLoraDeviceArgs = {
  input?: InputMaybe<UpdateLoraDeviceInput>
}

export type MutationUpdateManufacturerArgs = {
  input?: InputMaybe<UpdateManufacturerInput>
}

export type MutationUpdateMeterAddonArgs = {
  input?: InputMaybe<UpdateMeterAddonInput>
}

export type MutationUpdateMeterModelArgs = {
  input?: InputMaybe<UpdateMeterModelInput>
}

export type MutationUpdateRevisionArgs = {
  input?: InputMaybe<UpdateRevisionInput>
}

export type MutationUpdateRoleArgs = {
  input?: InputMaybe<UpdateRoleInput>
}

export type MutationUpdateThirdPartyArgs = {
  input?: InputMaybe<UpdateThirdPartyInput>
}

export type MutationUpdateTokenArgs = {
  input?: InputMaybe<UpdateTokenInput>
}

export type MutationUpdateUnitArgs = {
  input?: InputMaybe<UpdateUnitInput>
}

export type MutationUpdateUserArgs = {
  input?: InputMaybe<UpdateUserInput>
}

export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>
  file: Scalars['Upload']
  info?: InputMaybe<FileInfoInput>
  ref?: InputMaybe<Scalars['String']>
  refId?: InputMaybe<Scalars['ID']>
  source?: InputMaybe<Scalars['String']>
}

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW',
}

export type Query = {
  __typename?: 'Query'
  checkpoint?: Maybe<Checkpoint>
  checkpoints?: Maybe<Array<Maybe<Checkpoint>>>
  checkpointsConnection?: Maybe<CheckpointConnection>
  countries?: Maybe<Array<Maybe<Country>>>
  countriesConnection?: Maybe<CountryConnection>
  country?: Maybe<Country>
  emissionFactor?: Maybe<EmissionFactor>
  emissionFactorCategories?: Maybe<Array<Maybe<EmissionFactorCategory>>>
  emissionFactorCategoriesConnection?: Maybe<EmissionFactorCategoryConnection>
  emissionFactorCategory?: Maybe<EmissionFactorCategory>
  emissionFactorValidities?: Maybe<Array<Maybe<EmissionFactorValidity>>>
  emissionFactorValiditiesConnection?: Maybe<EmissionFactorValidityConnection>
  emissionFactorValidity?: Maybe<EmissionFactorValidity>
  emissionFactors?: Maybe<Array<Maybe<EmissionFactor>>>
  emissionFactorsConnection?: Maybe<EmissionFactorConnection>
  files?: Maybe<Array<Maybe<UploadFile>>>
  filesConnection?: Maybe<UploadFileConnection>
  inventories?: Maybe<Array<Maybe<Inventory>>>
  inventoriesConnection?: Maybe<InventoryConnection>
  inventory?: Maybe<Inventory>
  inventoryLocation?: Maybe<InventoryLocation>
  inventoryLocationBuilding?: Maybe<InventoryLocationBuilding>
  inventoryLocationBuildingFloorplan?: Maybe<InventoryLocationBuildingFloorplan>
  inventoryLocationBuildingFloorplans?: Maybe<Array<Maybe<InventoryLocationBuildingFloorplan>>>
  inventoryLocationBuildingFloorplansConnection?: Maybe<InventoryLocationBuildingFloorplanConnection>
  inventoryLocationBuildings?: Maybe<Array<Maybe<InventoryLocationBuilding>>>
  inventoryLocationBuildingsConnection?: Maybe<InventoryLocationBuildingConnection>
  inventoryLocationFloorplanMetersByBuilding?: Maybe<Array<Maybe<FloorplanMetersByBuilding>>>
  inventoryLocationOrder?: Maybe<InventoryLocationOrder>
  inventoryLocationOrders?: Maybe<Array<Maybe<InventoryLocationOrder>>>
  inventoryLocationOrdersConnection?: Maybe<InventoryLocationOrderConnection>
  inventoryLocations?: Maybe<Array<Maybe<InventoryLocation>>>
  inventoryLocationsConnection?: Maybe<InventoryLocationConnection>
  inventoryMeter?: Maybe<InventoryMeter>
  inventoryMeterApiKey?: Maybe<InventoryMeterApiKey>
  inventoryMeterApiKeys?: Maybe<Array<Maybe<InventoryMeterApiKey>>>
  inventoryMeterApiKeysConnection?: Maybe<InventoryMeterApiKeyConnection>
  inventoryMeterCheckpoint?: Maybe<InventoryMeterCheckpoint>
  inventoryMeterCheckpoints?: Maybe<Array<Maybe<InventoryMeterCheckpoint>>>
  inventoryMeterCheckpointsConnection?: Maybe<InventoryMeterCheckpointConnection>
  inventoryMeterElectricities?: Maybe<Array<Maybe<InventoryMeterElectricity>>>
  inventoryMeterElectricitiesConnection?: Maybe<InventoryMeterElectricityConnection>
  inventoryMeterElectricity?: Maybe<InventoryMeterElectricity>
  inventoryMeterGas?: Maybe<InventoryMeterGas>
  inventoryMeterGases?: Maybe<Array<Maybe<InventoryMeterGas>>>
  inventoryMeterGasesConnection?: Maybe<InventoryMeterGasConnection>
  inventoryMeterHeatCold?: Maybe<InventoryMeterHeatCold>
  inventoryMeterHeatColds?: Maybe<Array<Maybe<InventoryMeterHeatCold>>>
  inventoryMeterHeatColdsConnection?: Maybe<InventoryMeterHeatColdConnection>
  inventoryMeterOther?: Maybe<InventoryMeterOther>
  inventoryMeterOthers?: Maybe<Array<Maybe<InventoryMeterOther>>>
  inventoryMeterOthersConnection?: Maybe<InventoryMeterOtherConnection>
  inventoryMeterPhoto?: Maybe<InventoryMeterPhoto>
  inventoryMeterPhotos?: Maybe<Array<Maybe<InventoryMeterPhoto>>>
  inventoryMeterPhotosConnection?: Maybe<InventoryMeterPhotoConnection>
  inventoryMeterReading?: Maybe<InventoryMeterReading>
  inventoryMeterReadings?: Maybe<Array<Maybe<InventoryMeterReading>>>
  inventoryMeterReadingsConnection?: Maybe<InventoryMeterReadingConnection>
  inventoryMeterWater?: Maybe<InventoryMeterWater>
  inventoryMeterWaters?: Maybe<Array<Maybe<InventoryMeterWater>>>
  inventoryMeterWatersConnection?: Maybe<InventoryMeterWaterConnection>
  inventoryMeters?: Maybe<Array<Maybe<InventoryMeter>>>
  inventoryMetersConnection?: Maybe<InventoryMeterConnection>
  loraDevice?: Maybe<LoraDevice>
  loraDevices?: Maybe<Array<Maybe<LoraDevice>>>
  loraDevicesConnection?: Maybe<LoraDeviceConnection>
  manufacturer?: Maybe<Manufacturer>
  manufacturers?: Maybe<Array<Maybe<Manufacturer>>>
  manufacturersConnection?: Maybe<ManufacturerConnection>
  me?: Maybe<UsersPermissionsMe>
  meterAddon?: Maybe<MeterAddon>
  meterAddons?: Maybe<Array<Maybe<MeterAddon>>>
  meterAddonsConnection?: Maybe<MeterAddonConnection>
  meterModel?: Maybe<MeterModel>
  meterModels?: Maybe<Array<Maybe<MeterModel>>>
  meterModelsConnection?: Maybe<MeterModelConnection>
  revision?: Maybe<Revision>
  revisions?: Maybe<Array<Maybe<Revision>>>
  revisionsConnection?: Maybe<RevisionConnection>
  role?: Maybe<UsersPermissionsRole>
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>
  thirdParties?: Maybe<Array<Maybe<ThirdParty>>>
  thirdPartiesConnection?: Maybe<ThirdPartyConnection>
  thirdParty?: Maybe<ThirdParty>
  token?: Maybe<Token>
  tokens?: Maybe<Array<Maybe<Token>>>
  tokensConnection?: Maybe<TokenConnection>
  unit?: Maybe<Unit>
  units?: Maybe<Array<Maybe<Unit>>>
  unitsConnection?: Maybe<UnitConnection>
  user?: Maybe<UsersPermissionsUser>
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>
  usersConnection?: Maybe<UsersPermissionsUserConnection>
}

export type QueryCheckpointArgs = {
  id: Scalars['ID']
  publicationState?: InputMaybe<PublicationState>
}

export type QueryCheckpointsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryCheckpointsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryCountriesArgs = {
  limit?: InputMaybe<Scalars['Int']>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryCountriesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryCountryArgs = {
  id: Scalars['ID']
  publicationState?: InputMaybe<PublicationState>
}

export type QueryEmissionFactorArgs = {
  id: Scalars['ID']
  publicationState?: InputMaybe<PublicationState>
}

export type QueryEmissionFactorCategoriesArgs = {
  limit?: InputMaybe<Scalars['Int']>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryEmissionFactorCategoriesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryEmissionFactorCategoryArgs = {
  id: Scalars['ID']
  publicationState?: InputMaybe<PublicationState>
}

export type QueryEmissionFactorValiditiesArgs = {
  limit?: InputMaybe<Scalars['Int']>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryEmissionFactorValiditiesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryEmissionFactorValidityArgs = {
  id: Scalars['ID']
  publicationState?: InputMaybe<PublicationState>
}

export type QueryEmissionFactorsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryEmissionFactorsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryFilesArgs = {
  limit?: InputMaybe<Scalars['Int']>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryFilesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryInventoriesArgs = {
  limit?: InputMaybe<Scalars['Int']>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryInventoriesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryInventoryArgs = {
  id: Scalars['ID']
  publicationState?: InputMaybe<PublicationState>
}

export type QueryInventoryLocationArgs = {
  id: Scalars['ID']
  publicationState?: InputMaybe<PublicationState>
}

export type QueryInventoryLocationBuildingArgs = {
  id: Scalars['ID']
  publicationState?: InputMaybe<PublicationState>
}

export type QueryInventoryLocationBuildingFloorplanArgs = {
  id: Scalars['ID']
  publicationState?: InputMaybe<PublicationState>
}

export type QueryInventoryLocationBuildingFloorplansArgs = {
  limit?: InputMaybe<Scalars['Int']>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryInventoryLocationBuildingFloorplansConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryInventoryLocationBuildingsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryInventoryLocationBuildingsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryInventoryLocationFloorplanMetersByBuildingArgs = {
  locationId?: InputMaybe<Scalars['ID']>
}

export type QueryInventoryLocationOrderArgs = {
  id: Scalars['ID']
  publicationState?: InputMaybe<PublicationState>
}

export type QueryInventoryLocationOrdersArgs = {
  limit?: InputMaybe<Scalars['Int']>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryInventoryLocationOrdersConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryInventoryLocationsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryInventoryLocationsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryInventoryMeterArgs = {
  id: Scalars['ID']
  publicationState?: InputMaybe<PublicationState>
}

export type QueryInventoryMeterApiKeyArgs = {
  id: Scalars['ID']
  publicationState?: InputMaybe<PublicationState>
}

export type QueryInventoryMeterApiKeysArgs = {
  limit?: InputMaybe<Scalars['Int']>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryInventoryMeterApiKeysConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryInventoryMeterCheckpointArgs = {
  id: Scalars['ID']
  publicationState?: InputMaybe<PublicationState>
}

export type QueryInventoryMeterCheckpointsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryInventoryMeterCheckpointsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryInventoryMeterElectricitiesArgs = {
  limit?: InputMaybe<Scalars['Int']>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryInventoryMeterElectricitiesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryInventoryMeterElectricityArgs = {
  id: Scalars['ID']
  publicationState?: InputMaybe<PublicationState>
}

export type QueryInventoryMeterGasArgs = {
  id: Scalars['ID']
  publicationState?: InputMaybe<PublicationState>
}

export type QueryInventoryMeterGasesArgs = {
  limit?: InputMaybe<Scalars['Int']>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryInventoryMeterGasesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryInventoryMeterHeatColdArgs = {
  id: Scalars['ID']
  publicationState?: InputMaybe<PublicationState>
}

export type QueryInventoryMeterHeatColdsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryInventoryMeterHeatColdsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryInventoryMeterOtherArgs = {
  id: Scalars['ID']
  publicationState?: InputMaybe<PublicationState>
}

export type QueryInventoryMeterOthersArgs = {
  limit?: InputMaybe<Scalars['Int']>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryInventoryMeterOthersConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryInventoryMeterPhotoArgs = {
  id: Scalars['ID']
  publicationState?: InputMaybe<PublicationState>
}

export type QueryInventoryMeterPhotosArgs = {
  limit?: InputMaybe<Scalars['Int']>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryInventoryMeterPhotosConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryInventoryMeterReadingArgs = {
  id: Scalars['ID']
  publicationState?: InputMaybe<PublicationState>
}

export type QueryInventoryMeterReadingsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryInventoryMeterReadingsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryInventoryMeterWaterArgs = {
  id: Scalars['ID']
  publicationState?: InputMaybe<PublicationState>
}

export type QueryInventoryMeterWatersArgs = {
  limit?: InputMaybe<Scalars['Int']>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryInventoryMeterWatersConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryInventoryMetersArgs = {
  limit?: InputMaybe<Scalars['Int']>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryInventoryMetersConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryLoraDeviceArgs = {
  id: Scalars['ID']
  publicationState?: InputMaybe<PublicationState>
}

export type QueryLoraDevicesArgs = {
  limit?: InputMaybe<Scalars['Int']>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryLoraDevicesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryManufacturerArgs = {
  id: Scalars['ID']
  publicationState?: InputMaybe<PublicationState>
}

export type QueryManufacturersArgs = {
  limit?: InputMaybe<Scalars['Int']>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryManufacturersConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryMeterAddonArgs = {
  id: Scalars['ID']
  publicationState?: InputMaybe<PublicationState>
}

export type QueryMeterAddonsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryMeterAddonsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryMeterModelArgs = {
  id: Scalars['ID']
  publicationState?: InputMaybe<PublicationState>
}

export type QueryMeterModelsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryMeterModelsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryRevisionArgs = {
  id: Scalars['ID']
  publicationState?: InputMaybe<PublicationState>
}

export type QueryRevisionsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryRevisionsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryRoleArgs = {
  id: Scalars['ID']
  publicationState?: InputMaybe<PublicationState>
}

export type QueryRolesArgs = {
  limit?: InputMaybe<Scalars['Int']>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryRolesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryThirdPartiesArgs = {
  limit?: InputMaybe<Scalars['Int']>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryThirdPartiesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryThirdPartyArgs = {
  id: Scalars['ID']
  publicationState?: InputMaybe<PublicationState>
}

export type QueryTokenArgs = {
  id: Scalars['ID']
  publicationState?: InputMaybe<PublicationState>
}

export type QueryTokensArgs = {
  limit?: InputMaybe<Scalars['Int']>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryTokensConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryUnitArgs = {
  id: Scalars['ID']
  publicationState?: InputMaybe<PublicationState>
}

export type QueryUnitsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryUnitsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryUserArgs = {
  id: Scalars['ID']
  publicationState?: InputMaybe<PublicationState>
}

export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type QueryUsersConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type Revision = {
  __typename?: 'Revision'
  action?: Maybe<Enum_Revision_Action>
  collection_id?: Maybe<Scalars['Int']>
  collection_name?: Maybe<Scalars['String']>
  created_at: Scalars['DateTime']
  data?: Maybe<Scalars['JSON']>
  id: Scalars['ID']
  updated_at: Scalars['DateTime']
}

export type RevisionAggregator = {
  __typename?: 'RevisionAggregator'
  avg?: Maybe<RevisionAggregatorAvg>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<RevisionAggregatorMax>
  min?: Maybe<RevisionAggregatorMin>
  sum?: Maybe<RevisionAggregatorSum>
  totalCount?: Maybe<Scalars['Int']>
}

export type RevisionAggregatorAvg = {
  __typename?: 'RevisionAggregatorAvg'
  collection_id?: Maybe<Scalars['Float']>
}

export type RevisionAggregatorMax = {
  __typename?: 'RevisionAggregatorMax'
  collection_id?: Maybe<Scalars['Float']>
}

export type RevisionAggregatorMin = {
  __typename?: 'RevisionAggregatorMin'
  collection_id?: Maybe<Scalars['Float']>
}

export type RevisionAggregatorSum = {
  __typename?: 'RevisionAggregatorSum'
  collection_id?: Maybe<Scalars['Float']>
}

export type RevisionConnection = {
  __typename?: 'RevisionConnection'
  aggregate?: Maybe<RevisionAggregator>
  groupBy?: Maybe<RevisionGroupBy>
  values?: Maybe<Array<Maybe<Revision>>>
}

export type RevisionConnectionAction = {
  __typename?: 'RevisionConnectionAction'
  connection?: Maybe<RevisionConnection>
  key?: Maybe<Scalars['String']>
}

export type RevisionConnectionCollection_Id = {
  __typename?: 'RevisionConnectionCollection_id'
  connection?: Maybe<RevisionConnection>
  key?: Maybe<Scalars['Int']>
}

export type RevisionConnectionCollection_Name = {
  __typename?: 'RevisionConnectionCollection_name'
  connection?: Maybe<RevisionConnection>
  key?: Maybe<Scalars['String']>
}

export type RevisionConnectionCreated_At = {
  __typename?: 'RevisionConnectionCreated_at'
  connection?: Maybe<RevisionConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type RevisionConnectionData = {
  __typename?: 'RevisionConnectionData'
  connection?: Maybe<RevisionConnection>
  key?: Maybe<Scalars['JSON']>
}

export type RevisionConnectionId = {
  __typename?: 'RevisionConnectionId'
  connection?: Maybe<RevisionConnection>
  key?: Maybe<Scalars['ID']>
}

export type RevisionConnectionUpdated_At = {
  __typename?: 'RevisionConnectionUpdated_at'
  connection?: Maybe<RevisionConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type RevisionGroupBy = {
  __typename?: 'RevisionGroupBy'
  action?: Maybe<Array<Maybe<RevisionConnectionAction>>>
  collection_id?: Maybe<Array<Maybe<RevisionConnectionCollection_Id>>>
  collection_name?: Maybe<Array<Maybe<RevisionConnectionCollection_Name>>>
  created_at?: Maybe<Array<Maybe<RevisionConnectionCreated_At>>>
  data?: Maybe<Array<Maybe<RevisionConnectionData>>>
  id?: Maybe<Array<Maybe<RevisionConnectionId>>>
  updated_at?: Maybe<Array<Maybe<RevisionConnectionUpdated_At>>>
}

export type RevisionInput = {
  action?: InputMaybe<Enum_Revision_Action>
  collection_id?: InputMaybe<Scalars['Int']>
  collection_name?: InputMaybe<Scalars['String']>
  created_by?: InputMaybe<Scalars['ID']>
  data?: InputMaybe<Scalars['JSON']>
  updated_by?: InputMaybe<Scalars['ID']>
}

export type RoleInput = {
  created_by?: InputMaybe<Scalars['ID']>
  description?: InputMaybe<Scalars['String']>
  name: Scalars['String']
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  type?: InputMaybe<Scalars['String']>
  updated_by?: InputMaybe<Scalars['ID']>
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
}

export type ThirdParty = {
  __typename?: 'ThirdParty'
  company_number?: Maybe<Scalars['String']>
  country?: Maybe<Country>
  created_at: Scalars['DateTime']
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  published_at?: Maybe<Scalars['DateTime']>
  type?: Maybe<Enum_Thirdparty_Type>
  updated_at: Scalars['DateTime']
}

export type ThirdPartyAggregator = {
  __typename?: 'ThirdPartyAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type ThirdPartyConnection = {
  __typename?: 'ThirdPartyConnection'
  aggregate?: Maybe<ThirdPartyAggregator>
  groupBy?: Maybe<ThirdPartyGroupBy>
  values?: Maybe<Array<Maybe<ThirdParty>>>
}

export type ThirdPartyConnectionCompany_Number = {
  __typename?: 'ThirdPartyConnectionCompany_number'
  connection?: Maybe<ThirdPartyConnection>
  key?: Maybe<Scalars['String']>
}

export type ThirdPartyConnectionCountry = {
  __typename?: 'ThirdPartyConnectionCountry'
  connection?: Maybe<ThirdPartyConnection>
  key?: Maybe<Scalars['ID']>
}

export type ThirdPartyConnectionCreated_At = {
  __typename?: 'ThirdPartyConnectionCreated_at'
  connection?: Maybe<ThirdPartyConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type ThirdPartyConnectionId = {
  __typename?: 'ThirdPartyConnectionId'
  connection?: Maybe<ThirdPartyConnection>
  key?: Maybe<Scalars['ID']>
}

export type ThirdPartyConnectionName = {
  __typename?: 'ThirdPartyConnectionName'
  connection?: Maybe<ThirdPartyConnection>
  key?: Maybe<Scalars['String']>
}

export type ThirdPartyConnectionPublished_At = {
  __typename?: 'ThirdPartyConnectionPublished_at'
  connection?: Maybe<ThirdPartyConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type ThirdPartyConnectionType = {
  __typename?: 'ThirdPartyConnectionType'
  connection?: Maybe<ThirdPartyConnection>
  key?: Maybe<Scalars['String']>
}

export type ThirdPartyConnectionUpdated_At = {
  __typename?: 'ThirdPartyConnectionUpdated_at'
  connection?: Maybe<ThirdPartyConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type ThirdPartyGroupBy = {
  __typename?: 'ThirdPartyGroupBy'
  company_number?: Maybe<Array<Maybe<ThirdPartyConnectionCompany_Number>>>
  country?: Maybe<Array<Maybe<ThirdPartyConnectionCountry>>>
  created_at?: Maybe<Array<Maybe<ThirdPartyConnectionCreated_At>>>
  id?: Maybe<Array<Maybe<ThirdPartyConnectionId>>>
  name?: Maybe<Array<Maybe<ThirdPartyConnectionName>>>
  published_at?: Maybe<Array<Maybe<ThirdPartyConnectionPublished_At>>>
  type?: Maybe<Array<Maybe<ThirdPartyConnectionType>>>
  updated_at?: Maybe<Array<Maybe<ThirdPartyConnectionUpdated_At>>>
}

export type ThirdPartyInput = {
  company_number?: InputMaybe<Scalars['String']>
  country?: InputMaybe<Scalars['ID']>
  created_by?: InputMaybe<Scalars['ID']>
  name?: InputMaybe<Scalars['String']>
  published_at?: InputMaybe<Scalars['DateTime']>
  type?: InputMaybe<Enum_Thirdparty_Type>
  updated_by?: InputMaybe<Scalars['ID']>
}

export type Token = {
  __typename?: 'Token'
  created_at: Scalars['DateTime']
  id: Scalars['ID']
  published_at?: Maybe<Scalars['DateTime']>
  token?: Maybe<Scalars['String']>
  updated_at: Scalars['DateTime']
  user?: Maybe<UsersPermissionsUser>
}

export type TokenAggregator = {
  __typename?: 'TokenAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type TokenConnection = {
  __typename?: 'TokenConnection'
  aggregate?: Maybe<TokenAggregator>
  groupBy?: Maybe<TokenGroupBy>
  values?: Maybe<Array<Maybe<Token>>>
}

export type TokenConnectionCreated_At = {
  __typename?: 'TokenConnectionCreated_at'
  connection?: Maybe<TokenConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type TokenConnectionId = {
  __typename?: 'TokenConnectionId'
  connection?: Maybe<TokenConnection>
  key?: Maybe<Scalars['ID']>
}

export type TokenConnectionPublished_At = {
  __typename?: 'TokenConnectionPublished_at'
  connection?: Maybe<TokenConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type TokenConnectionToken = {
  __typename?: 'TokenConnectionToken'
  connection?: Maybe<TokenConnection>
  key?: Maybe<Scalars['String']>
}

export type TokenConnectionUpdated_At = {
  __typename?: 'TokenConnectionUpdated_at'
  connection?: Maybe<TokenConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type TokenConnectionUser = {
  __typename?: 'TokenConnectionUser'
  connection?: Maybe<TokenConnection>
  key?: Maybe<Scalars['ID']>
}

export type TokenGroupBy = {
  __typename?: 'TokenGroupBy'
  created_at?: Maybe<Array<Maybe<TokenConnectionCreated_At>>>
  id?: Maybe<Array<Maybe<TokenConnectionId>>>
  published_at?: Maybe<Array<Maybe<TokenConnectionPublished_At>>>
  token?: Maybe<Array<Maybe<TokenConnectionToken>>>
  updated_at?: Maybe<Array<Maybe<TokenConnectionUpdated_At>>>
  user?: Maybe<Array<Maybe<TokenConnectionUser>>>
}

export type TokenInput = {
  created_by?: InputMaybe<Scalars['ID']>
  published_at?: InputMaybe<Scalars['DateTime']>
  token?: InputMaybe<Scalars['String']>
  updated_by?: InputMaybe<Scalars['ID']>
  user?: InputMaybe<Scalars['ID']>
}

export type Unit = {
  __typename?: 'Unit'
  created_at: Scalars['DateTime']
  emission_factors?: Maybe<Array<Maybe<EmissionFactor>>>
  enum?: Maybe<Scalars['String']>
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  published_at?: Maybe<Scalars['DateTime']>
  readable?: Maybe<Scalars['String']>
  updated_at: Scalars['DateTime']
}

export type UnitEmission_FactorsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type UnitAggregator = {
  __typename?: 'UnitAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type UnitConnection = {
  __typename?: 'UnitConnection'
  aggregate?: Maybe<UnitAggregator>
  groupBy?: Maybe<UnitGroupBy>
  values?: Maybe<Array<Maybe<Unit>>>
}

export type UnitConnectionCreated_At = {
  __typename?: 'UnitConnectionCreated_at'
  connection?: Maybe<UnitConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type UnitConnectionEnum = {
  __typename?: 'UnitConnectionEnum'
  connection?: Maybe<UnitConnection>
  key?: Maybe<Scalars['String']>
}

export type UnitConnectionId = {
  __typename?: 'UnitConnectionId'
  connection?: Maybe<UnitConnection>
  key?: Maybe<Scalars['ID']>
}

export type UnitConnectionName = {
  __typename?: 'UnitConnectionName'
  connection?: Maybe<UnitConnection>
  key?: Maybe<Scalars['String']>
}

export type UnitConnectionPublished_At = {
  __typename?: 'UnitConnectionPublished_at'
  connection?: Maybe<UnitConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type UnitConnectionReadable = {
  __typename?: 'UnitConnectionReadable'
  connection?: Maybe<UnitConnection>
  key?: Maybe<Scalars['String']>
}

export type UnitConnectionUpdated_At = {
  __typename?: 'UnitConnectionUpdated_at'
  connection?: Maybe<UnitConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type UnitGroupBy = {
  __typename?: 'UnitGroupBy'
  created_at?: Maybe<Array<Maybe<UnitConnectionCreated_At>>>
  enum?: Maybe<Array<Maybe<UnitConnectionEnum>>>
  id?: Maybe<Array<Maybe<UnitConnectionId>>>
  name?: Maybe<Array<Maybe<UnitConnectionName>>>
  published_at?: Maybe<Array<Maybe<UnitConnectionPublished_At>>>
  readable?: Maybe<Array<Maybe<UnitConnectionReadable>>>
  updated_at?: Maybe<Array<Maybe<UnitConnectionUpdated_At>>>
}

export type UnitInput = {
  created_by?: InputMaybe<Scalars['ID']>
  emission_factors?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  enum?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  published_at?: InputMaybe<Scalars['DateTime']>
  readable?: InputMaybe<Scalars['String']>
  updated_by?: InputMaybe<Scalars['ID']>
}

export type UploadFile = {
  __typename?: 'UploadFile'
  alternativeText?: Maybe<Scalars['String']>
  caption?: Maybe<Scalars['String']>
  created_at: Scalars['DateTime']
  ext?: Maybe<Scalars['String']>
  formats?: Maybe<Scalars['JSON']>
  hash: Scalars['String']
  height?: Maybe<Scalars['Int']>
  id: Scalars['ID']
  mime: Scalars['String']
  name: Scalars['String']
  previewUrl?: Maybe<Scalars['String']>
  provider: Scalars['String']
  provider_metadata?: Maybe<Scalars['JSON']>
  related?: Maybe<Array<Maybe<Morph>>>
  size: Scalars['Float']
  updated_at: Scalars['DateTime']
  url: Scalars['String']
  width?: Maybe<Scalars['Int']>
}

export type UploadFileRelatedArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator'
  avg?: Maybe<UploadFileAggregatorAvg>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<UploadFileAggregatorMax>
  min?: Maybe<UploadFileAggregatorMin>
  sum?: Maybe<UploadFileAggregatorSum>
  totalCount?: Maybe<Scalars['Int']>
}

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg'
  height?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
}

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax'
  height?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
}

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin'
  height?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
}

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum'
  height?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
}

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection'
  aggregate?: Maybe<UploadFileAggregator>
  groupBy?: Maybe<UploadFileGroupBy>
  values?: Maybe<Array<Maybe<UploadFile>>>
}

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText'
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['String']>
}

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption'
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['String']>
}

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at'
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt'
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['String']>
}

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats'
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['JSON']>
}

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash'
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['String']>
}

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight'
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['Int']>
}

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId'
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['ID']>
}

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime'
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['String']>
}

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName'
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['String']>
}

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl'
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['String']>
}

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider'
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['String']>
}

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata'
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['JSON']>
}

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize'
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['Float']>
}

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at'
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl'
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['String']>
}

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth'
  connection?: Maybe<UploadFileConnection>
  key?: Maybe<Scalars['Int']>
}

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy'
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>
}

export type UserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>
  confirmationToken?: InputMaybe<Scalars['String']>
  confirmed?: InputMaybe<Scalars['Boolean']>
  created_by?: InputMaybe<Scalars['ID']>
  email: Scalars['String']
  password?: InputMaybe<Scalars['String']>
  provider?: InputMaybe<Scalars['String']>
  resetPasswordToken?: InputMaybe<Scalars['String']>
  role?: InputMaybe<Scalars['ID']>
  token?: InputMaybe<Scalars['ID']>
  updated_by?: InputMaybe<Scalars['ID']>
  username: Scalars['String']
}

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload'
  ok: Scalars['Boolean']
}

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']
  password: Scalars['String']
  provider?: InputMaybe<Scalars['String']>
}

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload'
  jwt?: Maybe<Scalars['String']>
  user: UsersPermissionsMe
}

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe'
  blocked?: Maybe<Scalars['Boolean']>
  confirmed?: Maybe<Scalars['Boolean']>
  email: Scalars['String']
  id: Scalars['ID']
  role?: Maybe<UsersPermissionsMeRole>
  username: Scalars['String']
}

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole'
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  name: Scalars['String']
  type?: Maybe<Scalars['String']>
}

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission'
  action: Scalars['String']
  controller: Scalars['String']
  enabled: Scalars['Boolean']
  id: Scalars['ID']
  policy?: Maybe<Scalars['String']>
  role?: Maybe<UsersPermissionsRole>
  type: Scalars['String']
}

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']
  password: Scalars['String']
  username: Scalars['String']
}

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole'
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  name: Scalars['String']
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>
  type?: Maybe<Scalars['String']>
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>
}

export type UsersPermissionsRolePermissionsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type UsersPermissionsRoleUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Scalars['String']>
  start?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<Scalars['JSON']>
}

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection'
  aggregate?: Maybe<UsersPermissionsRoleAggregator>
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>
}

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription'
  connection?: Maybe<UsersPermissionsRoleConnection>
  key?: Maybe<Scalars['String']>
}

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId'
  connection?: Maybe<UsersPermissionsRoleConnection>
  key?: Maybe<Scalars['ID']>
}

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName'
  connection?: Maybe<UsersPermissionsRoleConnection>
  key?: Maybe<Scalars['String']>
}

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType'
  connection?: Maybe<UsersPermissionsRoleConnection>
  key?: Maybe<Scalars['String']>
}

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy'
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>
}

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser'
  blocked?: Maybe<Scalars['Boolean']>
  confirmed?: Maybe<Scalars['Boolean']>
  created_at: Scalars['DateTime']
  email: Scalars['String']
  id: Scalars['ID']
  provider?: Maybe<Scalars['String']>
  role?: Maybe<UsersPermissionsRole>
  token?: Maybe<Token>
  updated_at: Scalars['DateTime']
  username: Scalars['String']
}

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator'
  count?: Maybe<Scalars['Int']>
  totalCount?: Maybe<Scalars['Int']>
}

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection'
  aggregate?: Maybe<UsersPermissionsUserAggregator>
  groupBy?: Maybe<UsersPermissionsUserGroupBy>
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>
}

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked'
  connection?: Maybe<UsersPermissionsUserConnection>
  key?: Maybe<Scalars['Boolean']>
}

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed'
  connection?: Maybe<UsersPermissionsUserConnection>
  key?: Maybe<Scalars['Boolean']>
}

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at'
  connection?: Maybe<UsersPermissionsUserConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail'
  connection?: Maybe<UsersPermissionsUserConnection>
  key?: Maybe<Scalars['String']>
}

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId'
  connection?: Maybe<UsersPermissionsUserConnection>
  key?: Maybe<Scalars['ID']>
}

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider'
  connection?: Maybe<UsersPermissionsUserConnection>
  key?: Maybe<Scalars['String']>
}

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole'
  connection?: Maybe<UsersPermissionsUserConnection>
  key?: Maybe<Scalars['ID']>
}

export type UsersPermissionsUserConnectionToken = {
  __typename?: 'UsersPermissionsUserConnectionToken'
  connection?: Maybe<UsersPermissionsUserConnection>
  key?: Maybe<Scalars['ID']>
}

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at'
  connection?: Maybe<UsersPermissionsUserConnection>
  key?: Maybe<Scalars['DateTime']>
}

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername'
  connection?: Maybe<UsersPermissionsUserConnection>
  key?: Maybe<Scalars['String']>
}

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy'
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>
  token?: Maybe<Array<Maybe<UsersPermissionsUserConnectionToken>>>
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>
}

export type CreateCheckpointInput = {
  data?: InputMaybe<CheckpointInput>
}

export type CreateCheckpointPayload = {
  __typename?: 'createCheckpointPayload'
  checkpoint?: Maybe<Checkpoint>
}

export type CreateCountryInput = {
  data?: InputMaybe<CountryInput>
}

export type CreateCountryPayload = {
  __typename?: 'createCountryPayload'
  country?: Maybe<Country>
}

export type CreateEmissionFactorCategoryInput = {
  data?: InputMaybe<EmissionFactorCategoryInput>
}

export type CreateEmissionFactorCategoryPayload = {
  __typename?: 'createEmissionFactorCategoryPayload'
  emissionFactorCategory?: Maybe<EmissionFactorCategory>
}

export type CreateEmissionFactorInput = {
  data?: InputMaybe<EmissionFactorInput>
}

export type CreateEmissionFactorPayload = {
  __typename?: 'createEmissionFactorPayload'
  emissionFactor?: Maybe<EmissionFactor>
}

export type CreateEmissionFactorValidityInput = {
  data?: InputMaybe<EmissionFactorValidityInput>
}

export type CreateEmissionFactorValidityPayload = {
  __typename?: 'createEmissionFactorValidityPayload'
  emissionFactorValidity?: Maybe<EmissionFactorValidity>
}

export type CreateInventoryInput = {
  data?: InputMaybe<InventoryInput>
}

export type CreateInventoryLocationBuildingFloorplanInput = {
  data?: InputMaybe<InventoryLocationBuildingFloorplanInput>
}

export type CreateInventoryLocationBuildingFloorplanPayload = {
  __typename?: 'createInventoryLocationBuildingFloorplanPayload'
  inventoryLocationBuildingFloorplan?: Maybe<InventoryLocationBuildingFloorplan>
}

export type CreateInventoryLocationBuildingInput = {
  data?: InputMaybe<InventoryLocationBuildingInput>
}

export type CreateInventoryLocationBuildingPayload = {
  __typename?: 'createInventoryLocationBuildingPayload'
  inventoryLocationBuilding?: Maybe<InventoryLocationBuilding>
}

export type CreateInventoryLocationInput = {
  data?: InputMaybe<InventoryLocationInput>
}

export type CreateInventoryLocationOrderInput = {
  data?: InputMaybe<InventoryLocationOrderInput>
}

export type CreateInventoryLocationOrderPayload = {
  __typename?: 'createInventoryLocationOrderPayload'
  inventoryLocationOrder?: Maybe<InventoryLocationOrder>
}

export type CreateInventoryLocationPayload = {
  __typename?: 'createInventoryLocationPayload'
  inventoryLocation?: Maybe<InventoryLocation>
}

export type CreateInventoryMeterApiKeyInput = {
  data?: InputMaybe<InventoryMeterApiKeyInput>
}

export type CreateInventoryMeterApiKeyPayload = {
  __typename?: 'createInventoryMeterApiKeyPayload'
  inventoryMeterApiKey?: Maybe<InventoryMeterApiKey>
}

export type CreateInventoryMeterCheckpointInput = {
  data?: InputMaybe<InventoryMeterCheckpointInput>
}

export type CreateInventoryMeterCheckpointPayload = {
  __typename?: 'createInventoryMeterCheckpointPayload'
  inventoryMeterCheckpoint?: Maybe<InventoryMeterCheckpoint>
}

export type CreateInventoryMeterElectricityInput = {
  data?: InputMaybe<InventoryMeterElectricityInput>
}

export type CreateInventoryMeterElectricityPayload = {
  __typename?: 'createInventoryMeterElectricityPayload'
  inventoryMeterElectricity?: Maybe<InventoryMeterElectricity>
}

export type CreateInventoryMeterGasInput = {
  data?: InputMaybe<InventoryMeterGasInput>
}

export type CreateInventoryMeterGasPayload = {
  __typename?: 'createInventoryMeterGasPayload'
  inventoryMeterGas?: Maybe<InventoryMeterGas>
}

export type CreateInventoryMeterHeatColdInput = {
  data?: InputMaybe<InventoryMeterHeatColdInput>
}

export type CreateInventoryMeterHeatColdPayload = {
  __typename?: 'createInventoryMeterHeatColdPayload'
  inventoryMeterHeatCold?: Maybe<InventoryMeterHeatCold>
}

export type CreateInventoryMeterInput = {
  data?: InputMaybe<InventoryMeterInput>
}

export type CreateInventoryMeterOtherInput = {
  data?: InputMaybe<InventoryMeterOtherInput>
}

export type CreateInventoryMeterOtherPayload = {
  __typename?: 'createInventoryMeterOtherPayload'
  inventoryMeterOther?: Maybe<InventoryMeterOther>
}

export type CreateInventoryMeterPayload = {
  __typename?: 'createInventoryMeterPayload'
  inventoryMeter?: Maybe<InventoryMeter>
}

export type CreateInventoryMeterPhotoInput = {
  data?: InputMaybe<InventoryMeterPhotoInput>
}

export type CreateInventoryMeterPhotoPayload = {
  __typename?: 'createInventoryMeterPhotoPayload'
  inventoryMeterPhoto?: Maybe<InventoryMeterPhoto>
}

export type CreateInventoryMeterReadingInput = {
  data?: InputMaybe<InventoryMeterReadingInput>
}

export type CreateInventoryMeterReadingPayload = {
  __typename?: 'createInventoryMeterReadingPayload'
  inventoryMeterReading?: Maybe<InventoryMeterReading>
}

export type CreateInventoryMeterWaterInput = {
  data?: InputMaybe<InventoryMeterWaterInput>
}

export type CreateInventoryMeterWaterPayload = {
  __typename?: 'createInventoryMeterWaterPayload'
  inventoryMeterWater?: Maybe<InventoryMeterWater>
}

export type CreateInventoryPayload = {
  __typename?: 'createInventoryPayload'
  inventory?: Maybe<Inventory>
}

export type CreateLoraDeviceInput = {
  data?: InputMaybe<LoraDeviceInput>
}

export type CreateLoraDevicePayload = {
  __typename?: 'createLoraDevicePayload'
  loraDevice?: Maybe<LoraDevice>
}

export type CreateManufacturerInput = {
  data?: InputMaybe<ManufacturerInput>
}

export type CreateManufacturerPayload = {
  __typename?: 'createManufacturerPayload'
  manufacturer?: Maybe<Manufacturer>
}

export type CreateMeterAddonInput = {
  data?: InputMaybe<MeterAddonInput>
}

export type CreateMeterAddonPayload = {
  __typename?: 'createMeterAddonPayload'
  meterAddon?: Maybe<MeterAddon>
}

export type CreateMeterModelInput = {
  data?: InputMaybe<MeterModelInput>
}

export type CreateMeterModelPayload = {
  __typename?: 'createMeterModelPayload'
  meterModel?: Maybe<MeterModel>
}

export type CreateRevisionInput = {
  data?: InputMaybe<RevisionInput>
}

export type CreateRevisionPayload = {
  __typename?: 'createRevisionPayload'
  revision?: Maybe<Revision>
}

export type CreateRoleInput = {
  data?: InputMaybe<RoleInput>
}

export type CreateRolePayload = {
  __typename?: 'createRolePayload'
  role?: Maybe<UsersPermissionsRole>
}

export type CreateThirdPartyInput = {
  data?: InputMaybe<ThirdPartyInput>
}

export type CreateThirdPartyPayload = {
  __typename?: 'createThirdPartyPayload'
  thirdParty?: Maybe<ThirdParty>
}

export type CreateTokenInput = {
  data?: InputMaybe<TokenInput>
}

export type CreateTokenPayload = {
  __typename?: 'createTokenPayload'
  token?: Maybe<Token>
}

export type CreateUnitInput = {
  data?: InputMaybe<UnitInput>
}

export type CreateUnitPayload = {
  __typename?: 'createUnitPayload'
  unit?: Maybe<Unit>
}

export type CreateUserInput = {
  data?: InputMaybe<UserInput>
}

export type CreateUserPayload = {
  __typename?: 'createUserPayload'
  user?: Maybe<UsersPermissionsUser>
}

export type DeleteCheckpointInput = {
  where?: InputMaybe<InputId>
}

export type DeleteCheckpointPayload = {
  __typename?: 'deleteCheckpointPayload'
  checkpoint?: Maybe<Checkpoint>
}

export type DeleteCountryInput = {
  where?: InputMaybe<InputId>
}

export type DeleteCountryPayload = {
  __typename?: 'deleteCountryPayload'
  country?: Maybe<Country>
}

export type DeleteEmissionFactorCategoryInput = {
  where?: InputMaybe<InputId>
}

export type DeleteEmissionFactorCategoryPayload = {
  __typename?: 'deleteEmissionFactorCategoryPayload'
  emissionFactorCategory?: Maybe<EmissionFactorCategory>
}

export type DeleteEmissionFactorInput = {
  where?: InputMaybe<InputId>
}

export type DeleteEmissionFactorPayload = {
  __typename?: 'deleteEmissionFactorPayload'
  emissionFactor?: Maybe<EmissionFactor>
}

export type DeleteEmissionFactorValidityInput = {
  where?: InputMaybe<InputId>
}

export type DeleteEmissionFactorValidityPayload = {
  __typename?: 'deleteEmissionFactorValidityPayload'
  emissionFactorValidity?: Maybe<EmissionFactorValidity>
}

export type DeleteFileInput = {
  where?: InputMaybe<InputId>
}

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload'
  file?: Maybe<UploadFile>
}

export type DeleteInventoryInput = {
  where?: InputMaybe<InputId>
}

export type DeleteInventoryLocationBuildingFloorplanInput = {
  where?: InputMaybe<InputId>
}

export type DeleteInventoryLocationBuildingFloorplanPayload = {
  __typename?: 'deleteInventoryLocationBuildingFloorplanPayload'
  inventoryLocationBuildingFloorplan?: Maybe<InventoryLocationBuildingFloorplan>
}

export type DeleteInventoryLocationBuildingInput = {
  where?: InputMaybe<InputId>
}

export type DeleteInventoryLocationBuildingPayload = {
  __typename?: 'deleteInventoryLocationBuildingPayload'
  inventoryLocationBuilding?: Maybe<InventoryLocationBuilding>
}

export type DeleteInventoryLocationInput = {
  where?: InputMaybe<InputId>
}

export type DeleteInventoryLocationOrderInput = {
  where?: InputMaybe<InputId>
}

export type DeleteInventoryLocationOrderPayload = {
  __typename?: 'deleteInventoryLocationOrderPayload'
  inventoryLocationOrder?: Maybe<InventoryLocationOrder>
}

export type DeleteInventoryLocationPayload = {
  __typename?: 'deleteInventoryLocationPayload'
  inventoryLocation?: Maybe<InventoryLocation>
}

export type DeleteInventoryMeterApiKeyInput = {
  where?: InputMaybe<InputId>
}

export type DeleteInventoryMeterApiKeyPayload = {
  __typename?: 'deleteInventoryMeterApiKeyPayload'
  inventoryMeterApiKey?: Maybe<InventoryMeterApiKey>
}

export type DeleteInventoryMeterCheckpointInput = {
  where?: InputMaybe<InputId>
}

export type DeleteInventoryMeterCheckpointPayload = {
  __typename?: 'deleteInventoryMeterCheckpointPayload'
  inventoryMeterCheckpoint?: Maybe<InventoryMeterCheckpoint>
}

export type DeleteInventoryMeterElectricityInput = {
  where?: InputMaybe<InputId>
}

export type DeleteInventoryMeterElectricityPayload = {
  __typename?: 'deleteInventoryMeterElectricityPayload'
  inventoryMeterElectricity?: Maybe<InventoryMeterElectricity>
}

export type DeleteInventoryMeterGasInput = {
  where?: InputMaybe<InputId>
}

export type DeleteInventoryMeterGasPayload = {
  __typename?: 'deleteInventoryMeterGasPayload'
  inventoryMeterGas?: Maybe<InventoryMeterGas>
}

export type DeleteInventoryMeterHeatColdInput = {
  where?: InputMaybe<InputId>
}

export type DeleteInventoryMeterHeatColdPayload = {
  __typename?: 'deleteInventoryMeterHeatColdPayload'
  inventoryMeterHeatCold?: Maybe<InventoryMeterHeatCold>
}

export type DeleteInventoryMeterInput = {
  where?: InputMaybe<InputId>
}

export type DeleteInventoryMeterOtherInput = {
  where?: InputMaybe<InputId>
}

export type DeleteInventoryMeterOtherPayload = {
  __typename?: 'deleteInventoryMeterOtherPayload'
  inventoryMeterOther?: Maybe<InventoryMeterOther>
}

export type DeleteInventoryMeterPayload = {
  __typename?: 'deleteInventoryMeterPayload'
  inventoryMeter?: Maybe<InventoryMeter>
}

export type DeleteInventoryMeterPhotoInput = {
  where?: InputMaybe<InputId>
}

export type DeleteInventoryMeterPhotoPayload = {
  __typename?: 'deleteInventoryMeterPhotoPayload'
  inventoryMeterPhoto?: Maybe<InventoryMeterPhoto>
}

export type DeleteInventoryMeterReadingInput = {
  where?: InputMaybe<InputId>
}

export type DeleteInventoryMeterReadingPayload = {
  __typename?: 'deleteInventoryMeterReadingPayload'
  inventoryMeterReading?: Maybe<InventoryMeterReading>
}

export type DeleteInventoryMeterWaterInput = {
  where?: InputMaybe<InputId>
}

export type DeleteInventoryMeterWaterPayload = {
  __typename?: 'deleteInventoryMeterWaterPayload'
  inventoryMeterWater?: Maybe<InventoryMeterWater>
}

export type DeleteInventoryPayload = {
  __typename?: 'deleteInventoryPayload'
  inventory?: Maybe<Inventory>
}

export type DeleteLoraDeviceInput = {
  where?: InputMaybe<InputId>
}

export type DeleteLoraDevicePayload = {
  __typename?: 'deleteLoraDevicePayload'
  loraDevice?: Maybe<LoraDevice>
}

export type DeleteManufacturerInput = {
  where?: InputMaybe<InputId>
}

export type DeleteManufacturerPayload = {
  __typename?: 'deleteManufacturerPayload'
  manufacturer?: Maybe<Manufacturer>
}

export type DeleteMeterAddonInput = {
  where?: InputMaybe<InputId>
}

export type DeleteMeterAddonPayload = {
  __typename?: 'deleteMeterAddonPayload'
  meterAddon?: Maybe<MeterAddon>
}

export type DeleteMeterModelInput = {
  where?: InputMaybe<InputId>
}

export type DeleteMeterModelPayload = {
  __typename?: 'deleteMeterModelPayload'
  meterModel?: Maybe<MeterModel>
}

export type DeleteRevisionInput = {
  where?: InputMaybe<InputId>
}

export type DeleteRevisionPayload = {
  __typename?: 'deleteRevisionPayload'
  revision?: Maybe<Revision>
}

export type DeleteRoleInput = {
  where?: InputMaybe<InputId>
}

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload'
  role?: Maybe<UsersPermissionsRole>
}

export type DeleteThirdPartyInput = {
  where?: InputMaybe<InputId>
}

export type DeleteThirdPartyPayload = {
  __typename?: 'deleteThirdPartyPayload'
  thirdParty?: Maybe<ThirdParty>
}

export type DeleteTokenInput = {
  where?: InputMaybe<InputId>
}

export type DeleteTokenPayload = {
  __typename?: 'deleteTokenPayload'
  token?: Maybe<Token>
}

export type DeleteUnitInput = {
  where?: InputMaybe<InputId>
}

export type DeleteUnitPayload = {
  __typename?: 'deleteUnitPayload'
  unit?: Maybe<Unit>
}

export type DeleteUserInput = {
  where?: InputMaybe<InputId>
}

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload'
  user?: Maybe<UsersPermissionsUser>
}

export type EditCheckpointInput = {
  created_by?: InputMaybe<Scalars['ID']>
  inventory?: InputMaybe<Scalars['ID']>
  inventory_meter_checkpoints?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  name?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Scalars['Int']>
  updated_by?: InputMaybe<Scalars['ID']>
}

export type EditCountryInput = {
  created_by?: InputMaybe<Scalars['ID']>
  emission_factor_validities?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  name?: InputMaybe<Scalars['String']>
  published_at?: InputMaybe<Scalars['DateTime']>
  shorthand?: InputMaybe<Scalars['String']>
  updated_by?: InputMaybe<Scalars['ID']>
}

export type EditEmissionFactorCategoryInput = {
  created_by?: InputMaybe<Scalars['ID']>
  description?: InputMaybe<Scalars['String']>
  emission_factors?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  name?: InputMaybe<Scalars['String']>
  published_at?: InputMaybe<Scalars['DateTime']>
  scope?: InputMaybe<Scalars['Int']>
  updated_by?: InputMaybe<Scalars['ID']>
}

export type EditEmissionFactorInput = {
  base_unit?: InputMaybe<Scalars['ID']>
  created_by?: InputMaybe<Scalars['ID']>
  emission_factor_category?: InputMaybe<Scalars['ID']>
  emission_factor_validities?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  name?: InputMaybe<Scalars['String']>
  published_at?: InputMaybe<Scalars['DateTime']>
  updated_by?: InputMaybe<Scalars['ID']>
}

export type EditEmissionFactorValidityInput = {
  CO2eq?: InputMaybe<Scalars['Float']>
  country?: InputMaybe<Scalars['ID']>
  created_by?: InputMaybe<Scalars['ID']>
  emission_factor?: InputMaybe<Scalars['ID']>
  published_at?: InputMaybe<Scalars['DateTime']>
  source?: InputMaybe<Scalars['String']>
  updated_by?: InputMaybe<Scalars['ID']>
  valid_from?: InputMaybe<Scalars['Date']>
  valid_to?: InputMaybe<Scalars['Date']>
}

export type EditFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>
  caption?: InputMaybe<Scalars['String']>
  created_by?: InputMaybe<Scalars['ID']>
  ext?: InputMaybe<Scalars['String']>
  formats?: InputMaybe<Scalars['JSON']>
  hash?: InputMaybe<Scalars['String']>
  height?: InputMaybe<Scalars['Int']>
  mime?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  previewUrl?: InputMaybe<Scalars['String']>
  provider?: InputMaybe<Scalars['String']>
  provider_metadata?: InputMaybe<Scalars['JSON']>
  related?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  size?: InputMaybe<Scalars['Float']>
  updated_by?: InputMaybe<Scalars['ID']>
  url?: InputMaybe<Scalars['String']>
  width?: InputMaybe<Scalars['Int']>
}

export type EditInventoryInput = {
  backend_gateway_customer_id?: InputMaybe<Scalars['String']>
  checkpoints?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  created_by?: InputMaybe<Scalars['ID']>
  folder_drive_id?: InputMaybe<Scalars['String']>
  inventory_locations?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  name?: InputMaybe<Scalars['String']>
  note?: InputMaybe<Scalars['String']>
  updated_by?: InputMaybe<Scalars['ID']>
}

export type EditInventoryLocationBuildingFloorplanInput = {
  created_by?: InputMaybe<Scalars['ID']>
  file_drive_id?: InputMaybe<Scalars['String']>
  floor?: InputMaybe<Scalars['Int']>
  height?: InputMaybe<Scalars['Int']>
  inventory_location_building?: InputMaybe<Scalars['ID']>
  updated_by?: InputMaybe<Scalars['ID']>
  width?: InputMaybe<Scalars['Int']>
}

export type EditInventoryLocationBuildingInput = {
  address?: InputMaybe<Scalars['String']>
  area?: InputMaybe<Scalars['Int']>
  backend_gateway_establishment_id?: InputMaybe<Scalars['String']>
  code?: InputMaybe<Scalars['String']>
  created_by?: InputMaybe<Scalars['ID']>
  extra?: InputMaybe<Scalars['JSON']>
  inventory_location?: InputMaybe<Scalars['ID']>
  inventory_location_building_floorplans?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  inventory_meters?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  name?: InputMaybe<Scalars['String']>
  tags?: InputMaybe<Scalars['JSON']>
  updated_by?: InputMaybe<Scalars['ID']>
}

export type EditInventoryLocationInput = {
  address?: InputMaybe<Scalars['String']>
  api_key?: InputMaybe<Scalars['String']>
  avatar_url?: InputMaybe<Scalars['String']>
  backend_gateway_customer_id?: InputMaybe<Scalars['String']>
  backend_gateway_establishment_id?: InputMaybe<Scalars['String']>
  created_by?: InputMaybe<Scalars['ID']>
  folder_drive_id?: InputMaybe<Scalars['String']>
  inventory?: InputMaybe<Scalars['ID']>
  inventory_location_buildings?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  inventory_location_orders?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  inventory_meters?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  lat?: InputMaybe<Scalars['Float']>
  lng?: InputMaybe<Scalars['Float']>
  name?: InputMaybe<Scalars['String']>
  updated_by?: InputMaybe<Scalars['ID']>
}

export type EditInventoryLocationOrderInput = {
  admin_user?: InputMaybe<Scalars['ID']>
  created_by?: InputMaybe<Scalars['ID']>
  inventory_location?: InputMaybe<Scalars['ID']>
  inventory_meter?: InputMaybe<Scalars['ID']>
  meter_addon?: InputMaybe<Scalars['ID']>
  quantity?: InputMaybe<Scalars['Float']>
  updated_by?: InputMaybe<Scalars['ID']>
}

export type EditInventoryMeterApiKeyInput = {
  admin_user?: InputMaybe<Scalars['ID']>
  api_key?: InputMaybe<Scalars['String']>
  created_by?: InputMaybe<Scalars['ID']>
  inventory_meter?: InputMaybe<Scalars['ID']>
  updated_by?: InputMaybe<Scalars['ID']>
}

export type EditInventoryMeterCheckpointInput = {
  checkpoint?: InputMaybe<Scalars['ID']>
  created_by?: InputMaybe<Scalars['ID']>
  inventory_meter?: InputMaybe<Scalars['ID']>
  submitted_at?: InputMaybe<Scalars['DateTime']>
  submitted_by?: InputMaybe<Scalars['ID']>
  updated_by?: InputMaybe<Scalars['ID']>
}

export type EditInventoryMeterElectricityInput = {
  created_by?: InputMaybe<Scalars['ID']>
  device_category?: InputMaybe<Enum_Inventorymeterelectricity_Device_Category>
  direct?: InputMaybe<Scalars['Boolean']>
  i_max?: InputMaybe<Scalars['Int']>
  i_measured?: InputMaybe<Scalars['Int']>
  i_range?: InputMaybe<Scalars['String']>
  input_spec?: InputMaybe<Scalars['String']>
  inventory_meter?: InputMaybe<Scalars['ID']>
  mct?: InputMaybe<Enum_Inventorymeterelectricity_Mct>
  mounting?: InputMaybe<Enum_Inventorymeterelectricity_Mounting>
  phases?: InputMaybe<Scalars['Int']>
  tariffs?: InputMaybe<Scalars['Int']>
  updated_by?: InputMaybe<Scalars['ID']>
  width?: InputMaybe<Scalars['Int']>
}

export type EditInventoryMeterGasInput = {
  created_by?: InputMaybe<Scalars['ID']>
  device_category?: InputMaybe<Enum_Inventorymetergas_Device_Category>
  diameter_nominal?: InputMaybe<Enum_Inventorymetergas_Diameter_Nominal>
  g_size?: InputMaybe<Enum_Inventorymetergas_G_Size>
  inventory_meter?: InputMaybe<Scalars['ID']>
  lay_length?: InputMaybe<Scalars['Int']>
  orientation?: InputMaybe<Enum_Inventorymetergas_Orientation>
  p_max?: InputMaybe<Scalars['Float']>
  q_max?: InputMaybe<Scalars['Float']>
  q_min?: InputMaybe<Scalars['Float']>
  rated_power?: InputMaybe<Scalars['String']>
  updated_by?: InputMaybe<Scalars['ID']>
}

export type EditInventoryMeterHeatColdInput = {
  created_by?: InputMaybe<Scalars['ID']>
  diameter_nominal?: InputMaybe<Enum_Inventorymeterheatcold_Diameter_Nominal>
  flange?: InputMaybe<Scalars['Boolean']>
  flowrate?: InputMaybe<Scalars['String']>
  installation_position?: InputMaybe<Enum_Inventorymeterheatcold_Installation_Position>
  inventory_meter?: InputMaybe<Scalars['ID']>
  lay_length?: InputMaybe<Scalars['Int']>
  orientation?: InputMaybe<Enum_Inventorymeterheatcold_Orientation>
  resistance?: InputMaybe<Enum_Inventorymeterheatcold_Resistance>
  updated_by?: InputMaybe<Scalars['ID']>
}

export type EditInventoryMeterInput = {
  accessibility?: InputMaybe<Scalars['String']>
  backend_gateway_meter_id?: InputMaybe<Scalars['String']>
  building_floor?: InputMaybe<Scalars['Int']>
  calibrated?: InputMaybe<Scalars['Int']>
  code?: InputMaybe<Scalars['String']>
  created_by?: InputMaybe<Scalars['ID']>
  data_source_channel?: InputMaybe<Scalars['Int']>
  data_source_id?: InputMaybe<Scalars['String']>
  factor?: InputMaybe<Scalars['Float']>
  floorplan_lat?: InputMaybe<Scalars['Float']>
  floorplan_lng?: InputMaybe<Scalars['Float']>
  initial_offset?: InputMaybe<Scalars['Float']>
  installed_at?: InputMaybe<Scalars['DateTime']>
  installed_by?: InputMaybe<Scalars['String']>
  inventory_location?: InputMaybe<Scalars['ID']>
  inventory_location_building?: InputMaybe<Scalars['ID']>
  inventory_location_orders?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  inventory_meter_api_key?: InputMaybe<Scalars['ID']>
  inventory_meter_checkpoints?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  inventory_meter_photos?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  inventory_meter_reading?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  lat?: InputMaybe<Scalars['Float']>
  lng?: InputMaybe<Scalars['Float']>
  manufactured?: InputMaybe<Scalars['Int']>
  meter_model?: InputMaybe<Scalars['ID']>
  meter_mount_type?: InputMaybe<Enum_Inventorymeter_Meter_Mount_Type>
  meter_type?: InputMaybe<Enum_Inventorymeter_Meter_Type>
  monitored_entity?: InputMaybe<Scalars['String']>
  new_meter?: InputMaybe<Scalars['Boolean']>
  note?: InputMaybe<Scalars['String']>
  owner?: InputMaybe<Scalars['String']>
  owner_type?: InputMaybe<Enum_Inventorymeter_Owner_Type>
  remote_reading_owner?: InputMaybe<Scalars['String']>
  remote_reading_serial?: InputMaybe<Scalars['String']>
  rssi?: InputMaybe<Scalars['Int']>
  serial_number?: InputMaybe<Scalars['String']>
  submeter?: InputMaybe<Scalars['Boolean']>
  submitted_at?: InputMaybe<Scalars['DateTime']>
  submitted_by?: InputMaybe<Scalars['String']>
  tenant?: InputMaybe<Scalars['String']>
  unit?: InputMaybe<Enum_Inventorymeter_Unit>
  updated_by?: InputMaybe<Scalars['ID']>
}

export type EditInventoryMeterOtherInput = {
  created_by?: InputMaybe<Scalars['ID']>
  device_category?: InputMaybe<Enum_Inventorymeterother_Device_Category>
  inventory_meter?: InputMaybe<Scalars['ID']>
  updated_by?: InputMaybe<Scalars['ID']>
}

export type EditInventoryMeterPhotoInput = {
  created_by?: InputMaybe<Scalars['ID']>
  file_drive_id?: InputMaybe<Scalars['String']>
  inventory_meter?: InputMaybe<Scalars['ID']>
  type?: InputMaybe<Enum_Inventorymeterphoto_Type>
  updated_by?: InputMaybe<Scalars['ID']>
}

export type EditInventoryMeterReadingInput = {
  counter?: InputMaybe<Scalars['Float']>
  created_by?: InputMaybe<Scalars['ID']>
  date?: InputMaybe<Scalars['DateTime']>
  inventory_meter?: InputMaybe<Scalars['ID']>
  published_at?: InputMaybe<Scalars['DateTime']>
  updated_by?: InputMaybe<Scalars['ID']>
}

export type EditInventoryMeterWaterInput = {
  created_by?: InputMaybe<Scalars['ID']>
  diameter_nominal?: InputMaybe<Enum_Inventorymeterwater_Diameter_Nominal>
  flange?: InputMaybe<Scalars['Boolean']>
  flowrate?: InputMaybe<Scalars['String']>
  hot_water?: InputMaybe<Scalars['Boolean']>
  inventory_meter?: InputMaybe<Scalars['ID']>
  lay_length?: InputMaybe<Scalars['Int']>
  orientation?: InputMaybe<Enum_Inventorymeterwater_Orientation>
  tube_material?: InputMaybe<Enum_Inventorymeterwater_Tube_Material>
  updated_by?: InputMaybe<Scalars['ID']>
  woltman?: InputMaybe<Scalars['Boolean']>
}

export type EditLocaleInput = {
  code?: InputMaybe<Scalars['String']>
  created_by?: InputMaybe<Scalars['ID']>
  name?: InputMaybe<Scalars['String']>
  updated_by?: InputMaybe<Scalars['ID']>
}

export type EditLoraDeviceInput = {
  activation_type?: InputMaybe<Enum_Loradevice_Activation_Type>
  app_eui?: InputMaybe<Scalars['String']>
  app_key?: InputMaybe<Scalars['String']>
  app_s_key?: InputMaybe<Scalars['String']>
  created_by?: InputMaybe<Scalars['ID']>
  dev_eui?: InputMaybe<Scalars['String']>
  device_address?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  nwk_s_key?: InputMaybe<Scalars['String']>
  updated_by?: InputMaybe<Scalars['ID']>
}

export type EditManufacturerInput = {
  avatar_url?: InputMaybe<Scalars['String']>
  created_by?: InputMaybe<Scalars['ID']>
  meter_models?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  name?: InputMaybe<Scalars['String']>
  published_at?: InputMaybe<Scalars['DateTime']>
  updated_by?: InputMaybe<Scalars['ID']>
  website?: InputMaybe<Scalars['String']>
}

export type EditMeterAddonInput = {
  avatar_url?: InputMaybe<Scalars['String']>
  category?: InputMaybe<Enum_Meteraddon_Category>
  code?: InputMaybe<Scalars['String']>
  created_by?: InputMaybe<Scalars['ID']>
  meter_models?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  name?: InputMaybe<Scalars['String']>
  note?: InputMaybe<Scalars['String']>
  priority?: InputMaybe<Scalars['Int']>
  published_at?: InputMaybe<Scalars['DateTime']>
  updated_by?: InputMaybe<Scalars['ID']>
}

export type EditMeterModelInput = {
  avatar_url?: InputMaybe<Scalars['String']>
  created_by?: InputMaybe<Scalars['ID']>
  folder_drive_url?: InputMaybe<Scalars['String']>
  manufacturer?: InputMaybe<Scalars['ID']>
  meter_addons?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  meter_type?: InputMaybe<Enum_Metermodel_Meter_Type>
  name?: InputMaybe<Scalars['String']>
  published_at?: InputMaybe<Scalars['DateTime']>
  updated_by?: InputMaybe<Scalars['ID']>
  website?: InputMaybe<Scalars['String']>
}

export type EditRevisionInput = {
  action?: InputMaybe<Enum_Revision_Action>
  collection_id?: InputMaybe<Scalars['Int']>
  collection_name?: InputMaybe<Scalars['String']>
  created_by?: InputMaybe<Scalars['ID']>
  data?: InputMaybe<Scalars['JSON']>
  updated_by?: InputMaybe<Scalars['ID']>
}

export type EditRoleInput = {
  created_by?: InputMaybe<Scalars['ID']>
  description?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  type?: InputMaybe<Scalars['String']>
  updated_by?: InputMaybe<Scalars['ID']>
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
}

export type EditThirdPartyInput = {
  company_number?: InputMaybe<Scalars['String']>
  country?: InputMaybe<Scalars['ID']>
  created_by?: InputMaybe<Scalars['ID']>
  name?: InputMaybe<Scalars['String']>
  published_at?: InputMaybe<Scalars['DateTime']>
  type?: InputMaybe<Enum_Thirdparty_Type>
  updated_by?: InputMaybe<Scalars['ID']>
}

export type EditTokenInput = {
  created_by?: InputMaybe<Scalars['ID']>
  published_at?: InputMaybe<Scalars['DateTime']>
  token?: InputMaybe<Scalars['String']>
  updated_by?: InputMaybe<Scalars['ID']>
  user?: InputMaybe<Scalars['ID']>
}

export type EditUnitInput = {
  created_by?: InputMaybe<Scalars['ID']>
  emission_factors?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  enum?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  published_at?: InputMaybe<Scalars['DateTime']>
  readable?: InputMaybe<Scalars['String']>
  updated_by?: InputMaybe<Scalars['ID']>
}

export type EditUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>
  confirmationToken?: InputMaybe<Scalars['String']>
  confirmed?: InputMaybe<Scalars['Boolean']>
  created_by?: InputMaybe<Scalars['ID']>
  email?: InputMaybe<Scalars['String']>
  password?: InputMaybe<Scalars['String']>
  provider?: InputMaybe<Scalars['String']>
  resetPasswordToken?: InputMaybe<Scalars['String']>
  role?: InputMaybe<Scalars['ID']>
  token?: InputMaybe<Scalars['ID']>
  updated_by?: InputMaybe<Scalars['ID']>
  username?: InputMaybe<Scalars['String']>
}

export type UpdateCheckpointInput = {
  data?: InputMaybe<EditCheckpointInput>
  where?: InputMaybe<InputId>
}

export type UpdateCheckpointPayload = {
  __typename?: 'updateCheckpointPayload'
  checkpoint?: Maybe<Checkpoint>
}

export type UpdateCountryInput = {
  data?: InputMaybe<EditCountryInput>
  where?: InputMaybe<InputId>
}

export type UpdateCountryPayload = {
  __typename?: 'updateCountryPayload'
  country?: Maybe<Country>
}

export type UpdateEmissionFactorCategoryInput = {
  data?: InputMaybe<EditEmissionFactorCategoryInput>
  where?: InputMaybe<InputId>
}

export type UpdateEmissionFactorCategoryPayload = {
  __typename?: 'updateEmissionFactorCategoryPayload'
  emissionFactorCategory?: Maybe<EmissionFactorCategory>
}

export type UpdateEmissionFactorInput = {
  data?: InputMaybe<EditEmissionFactorInput>
  where?: InputMaybe<InputId>
}

export type UpdateEmissionFactorPayload = {
  __typename?: 'updateEmissionFactorPayload'
  emissionFactor?: Maybe<EmissionFactor>
}

export type UpdateEmissionFactorValidityInput = {
  data?: InputMaybe<EditEmissionFactorValidityInput>
  where?: InputMaybe<InputId>
}

export type UpdateEmissionFactorValidityPayload = {
  __typename?: 'updateEmissionFactorValidityPayload'
  emissionFactorValidity?: Maybe<EmissionFactorValidity>
}

export type UpdateInventoryInput = {
  data?: InputMaybe<EditInventoryInput>
  where?: InputMaybe<InputId>
}

export type UpdateInventoryLocationBuildingFloorplanInput = {
  data?: InputMaybe<EditInventoryLocationBuildingFloorplanInput>
  where?: InputMaybe<InputId>
}

export type UpdateInventoryLocationBuildingFloorplanPayload = {
  __typename?: 'updateInventoryLocationBuildingFloorplanPayload'
  inventoryLocationBuildingFloorplan?: Maybe<InventoryLocationBuildingFloorplan>
}

export type UpdateInventoryLocationBuildingInput = {
  data?: InputMaybe<EditInventoryLocationBuildingInput>
  where?: InputMaybe<InputId>
}

export type UpdateInventoryLocationBuildingPayload = {
  __typename?: 'updateInventoryLocationBuildingPayload'
  inventoryLocationBuilding?: Maybe<InventoryLocationBuilding>
}

export type UpdateInventoryLocationInput = {
  data?: InputMaybe<EditInventoryLocationInput>
  where?: InputMaybe<InputId>
}

export type UpdateInventoryLocationOrderInput = {
  data?: InputMaybe<EditInventoryLocationOrderInput>
  where?: InputMaybe<InputId>
}

export type UpdateInventoryLocationOrderPayload = {
  __typename?: 'updateInventoryLocationOrderPayload'
  inventoryLocationOrder?: Maybe<InventoryLocationOrder>
}

export type UpdateInventoryLocationPayload = {
  __typename?: 'updateInventoryLocationPayload'
  inventoryLocation?: Maybe<InventoryLocation>
}

export type UpdateInventoryMeterApiKeyInput = {
  data?: InputMaybe<EditInventoryMeterApiKeyInput>
  where?: InputMaybe<InputId>
}

export type UpdateInventoryMeterApiKeyPayload = {
  __typename?: 'updateInventoryMeterApiKeyPayload'
  inventoryMeterApiKey?: Maybe<InventoryMeterApiKey>
}

export type UpdateInventoryMeterCheckpointInput = {
  data?: InputMaybe<EditInventoryMeterCheckpointInput>
  where?: InputMaybe<InputId>
}

export type UpdateInventoryMeterCheckpointPayload = {
  __typename?: 'updateInventoryMeterCheckpointPayload'
  inventoryMeterCheckpoint?: Maybe<InventoryMeterCheckpoint>
}

export type UpdateInventoryMeterElectricityInput = {
  data?: InputMaybe<EditInventoryMeterElectricityInput>
  where?: InputMaybe<InputId>
}

export type UpdateInventoryMeterElectricityPayload = {
  __typename?: 'updateInventoryMeterElectricityPayload'
  inventoryMeterElectricity?: Maybe<InventoryMeterElectricity>
}

export type UpdateInventoryMeterGasInput = {
  data?: InputMaybe<EditInventoryMeterGasInput>
  where?: InputMaybe<InputId>
}

export type UpdateInventoryMeterGasPayload = {
  __typename?: 'updateInventoryMeterGasPayload'
  inventoryMeterGas?: Maybe<InventoryMeterGas>
}

export type UpdateInventoryMeterHeatColdInput = {
  data?: InputMaybe<EditInventoryMeterHeatColdInput>
  where?: InputMaybe<InputId>
}

export type UpdateInventoryMeterHeatColdPayload = {
  __typename?: 'updateInventoryMeterHeatColdPayload'
  inventoryMeterHeatCold?: Maybe<InventoryMeterHeatCold>
}

export type UpdateInventoryMeterInput = {
  data?: InputMaybe<EditInventoryMeterInput>
  where?: InputMaybe<InputId>
}

export type UpdateInventoryMeterOtherInput = {
  data?: InputMaybe<EditInventoryMeterOtherInput>
  where?: InputMaybe<InputId>
}

export type UpdateInventoryMeterOtherPayload = {
  __typename?: 'updateInventoryMeterOtherPayload'
  inventoryMeterOther?: Maybe<InventoryMeterOther>
}

export type UpdateInventoryMeterPayload = {
  __typename?: 'updateInventoryMeterPayload'
  inventoryMeter?: Maybe<InventoryMeter>
}

export type UpdateInventoryMeterPhotoInput = {
  data?: InputMaybe<EditInventoryMeterPhotoInput>
  where?: InputMaybe<InputId>
}

export type UpdateInventoryMeterPhotoPayload = {
  __typename?: 'updateInventoryMeterPhotoPayload'
  inventoryMeterPhoto?: Maybe<InventoryMeterPhoto>
}

export type UpdateInventoryMeterReadingInput = {
  data?: InputMaybe<EditInventoryMeterReadingInput>
  where?: InputMaybe<InputId>
}

export type UpdateInventoryMeterReadingPayload = {
  __typename?: 'updateInventoryMeterReadingPayload'
  inventoryMeterReading?: Maybe<InventoryMeterReading>
}

export type UpdateInventoryMeterWaterInput = {
  data?: InputMaybe<EditInventoryMeterWaterInput>
  where?: InputMaybe<InputId>
}

export type UpdateInventoryMeterWaterPayload = {
  __typename?: 'updateInventoryMeterWaterPayload'
  inventoryMeterWater?: Maybe<InventoryMeterWater>
}

export type UpdateInventoryPayload = {
  __typename?: 'updateInventoryPayload'
  inventory?: Maybe<Inventory>
}

export type UpdateLoraDeviceInput = {
  data?: InputMaybe<EditLoraDeviceInput>
  where?: InputMaybe<InputId>
}

export type UpdateLoraDevicePayload = {
  __typename?: 'updateLoraDevicePayload'
  loraDevice?: Maybe<LoraDevice>
}

export type UpdateManufacturerInput = {
  data?: InputMaybe<EditManufacturerInput>
  where?: InputMaybe<InputId>
}

export type UpdateManufacturerPayload = {
  __typename?: 'updateManufacturerPayload'
  manufacturer?: Maybe<Manufacturer>
}

export type UpdateMeterAddonInput = {
  data?: InputMaybe<EditMeterAddonInput>
  where?: InputMaybe<InputId>
}

export type UpdateMeterAddonPayload = {
  __typename?: 'updateMeterAddonPayload'
  meterAddon?: Maybe<MeterAddon>
}

export type UpdateMeterModelInput = {
  data?: InputMaybe<EditMeterModelInput>
  where?: InputMaybe<InputId>
}

export type UpdateMeterModelPayload = {
  __typename?: 'updateMeterModelPayload'
  meterModel?: Maybe<MeterModel>
}

export type UpdateRevisionInput = {
  data?: InputMaybe<EditRevisionInput>
  where?: InputMaybe<InputId>
}

export type UpdateRevisionPayload = {
  __typename?: 'updateRevisionPayload'
  revision?: Maybe<Revision>
}

export type UpdateRoleInput = {
  data?: InputMaybe<EditRoleInput>
  where?: InputMaybe<InputId>
}

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload'
  role?: Maybe<UsersPermissionsRole>
}

export type UpdateThirdPartyInput = {
  data?: InputMaybe<EditThirdPartyInput>
  where?: InputMaybe<InputId>
}

export type UpdateThirdPartyPayload = {
  __typename?: 'updateThirdPartyPayload'
  thirdParty?: Maybe<ThirdParty>
}

export type UpdateTokenInput = {
  data?: InputMaybe<EditTokenInput>
  where?: InputMaybe<InputId>
}

export type UpdateTokenPayload = {
  __typename?: 'updateTokenPayload'
  token?: Maybe<Token>
}

export type UpdateUnitInput = {
  data?: InputMaybe<EditUnitInput>
  where?: InputMaybe<InputId>
}

export type UpdateUnitPayload = {
  __typename?: 'updateUnitPayload'
  unit?: Maybe<Unit>
}

export type UpdateUserInput = {
  data?: InputMaybe<EditUserInput>
  where?: InputMaybe<InputId>
}

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload'
  user?: Maybe<UsersPermissionsUser>
}
