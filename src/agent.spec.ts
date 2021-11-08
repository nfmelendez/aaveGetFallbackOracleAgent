import {
  FindingType,
  FindingSeverity,
  Finding,
  HandleTransaction,
  createTransactionEvent
} from "forta-agent"
import agent from "./agent"

// contract source https://etherscan.io/address/0xa50ba011c48153de246e5192c8f9258a2ba79ca9#code
describe("aave getFallbackOracle agent", () => {
  let handleTransaction: HandleTransaction

  const createTxEvent = () => createTransactionEvent({
    transaction: {} as any,
    receipt: { } as any,
    block: {} as any,
  })

  beforeAll(() => {
    handleTransaction = agent.handleTransaction
  })

  describe("handleTransaction", () => {
    it("returns empty findings if no function is called", async () => {
      const txEvent = createTxEvent()

      const findings = await handleTransaction(txEvent)

      expect(findings).toStrictEqual([])
    })

  })
})
