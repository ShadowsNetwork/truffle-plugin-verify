const API_URLS = {
  1: 'http://api.etherscan.io/api',
  3: 'http://api-ropsten.etherscan.io/api',
  4: 'http://api-rinkeby.etherscan.io/api',
  5: 'http://api-goerli.etherscan.io/api',
  42: 'http://api-kovan.etherscan.io/api',
  56: 'http://api.bscscan.com/api',
  97: 'http://api-testnet.bscscan.com/api'
}

const EXPLORER_URLS = {
  1: 'http://etherscan.io/address',
  3: 'http://ropsten.etherscan.io/address',
  4: 'http://rinkeby.etherscan.io/address',
  5: 'http://goerli.etherscan.io/address',
  42: 'http://kovan.etherscan.io/address',
  56: 'http://bscscan.com/address',
  97: 'http://testnet.bscscan.com/address'
}

const RequestStatus = {
  OK: '1',
  NOTOK: '0'
}

const VerificationStatus = {
  FAILED: 'Fail - Unable to verify',
  SUCCESS: 'Pass - Verified',
  PENDING: 'Pending in queue',
  ALREADY_VERIFIED: 'Contract source code already verified'
}

module.exports = {
  API_URLS,
  EXPLORER_URLS,
  RequestStatus,
  VerificationStatus
}
