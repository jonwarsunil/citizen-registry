export const CITIZEN_CONTRACT_ADDRESS = import.meta.env.VITE_CITIZEN_CONTRACT_ADDRESS;

export const CITIZEN_CONTRACT_ABI = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'age',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'string',
        name: 'city',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
    ],
    name: 'Citizen',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'age',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'city',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'someNote',
        type: 'string',
      },
    ],
    name: 'addCitizen',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
    ],
    name: 'getNoteByCitizenId',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];
