import { 
  Finding, 
  HandleTransaction, 
  TransactionEvent, 
  FindingSeverity, 
  FindingType 
} from 'forta-agent'

const AAVE_ORACLE_GETFALLBACKORACLE_FUNCTION = "function getFallbackOracle()"
const AAVE_ORACLE_ADDRESS = "0xA50ba011c48153De246E5192C8f9258A2ba79Ca9"


const handleTransaction: HandleTransaction = async (txEvent: TransactionEvent) => {
  const findings: Finding[] = []

  if (findings.length >= 5) return findings;


  const aaveOracleGetFallbackOracleCalls = txEvent.filterFunction(
    AAVE_ORACLE_GETFALLBACKORACLE_FUNCTION,
    AAVE_ORACLE_ADDRESS
  );

  aaveOracleGetFallbackOracleCalls.forEach((transferFromInvocation) => {
    findings.push(
      Finding.fromObject({
        name: "Oracle Fallback Called",
        description: "Chainlink aggregator price <= 0 so called aave maintaned oracle",
        alertId: "FORTA-1",
        severity: FindingSeverity.High,
        type: FindingType.Info,
        metadata: {
          by: txEvent.from,
        },
      })
    );
  })


  return findings
}

export default {
  handleTransaction,
}