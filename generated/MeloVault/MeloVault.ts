// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class MeloVaultCreated extends ethereum.Event {
  get params(): MeloVaultCreated__Params {
    return new MeloVaultCreated__Params(this);
  }
}

export class MeloVaultCreated__Params {
  _event: MeloVaultCreated;

  constructor(event: MeloVaultCreated) {
    this._event = event;
  }

  get name(): string {
    return this._event.parameters[0].value.toString();
  }

  get token(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ProposalCreated extends ethereum.Event {
  get params(): ProposalCreated__Params {
    return new ProposalCreated__Params(this);
  }
}

export class ProposalCreated__Params {
  _event: ProposalCreated;

  constructor(event: ProposalCreated) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get snapshotBlockHash(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get proposal(): ProposalCreatedProposalStruct {
    return changetype<ProposalCreatedProposalStruct>(
      this._event.parameters[2].value.toTuple()
    );
  }
}

export class ProposalCreatedProposalStruct extends ethereum.Tuple {
  get endBlock(): BigInt {
    return this[0].toBigInt();
  }

  get title(): string {
    return this[1].toString();
  }

  get descriptionHash(): string {
    return this[2].toString();
  }

  get transactions(): Array<ProposalCreatedProposalTransactionsStruct> {
    return this[3].toTupleArray<ProposalCreatedProposalTransactionsStruct>();
  }
}

export class ProposalCreatedProposalTransactionsStruct extends ethereum.Tuple {
  get to(): Address {
    return this[0].toAddress();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }

  get data(): Bytes {
    return this[2].toBytes();
  }

  get gas(): BigInt {
    return this[3].toBigInt();
  }
}

export class ProposalExecuted extends ethereum.Event {
  get params(): ProposalExecuted__Params {
    return new ProposalExecuted__Params(this);
  }
}

export class ProposalExecuted__Params {
  _event: ProposalExecuted;

  constructor(event: ProposalExecuted) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get proposal(): ProposalExecutedProposalStruct {
    return changetype<ProposalExecutedProposalStruct>(
      this._event.parameters[1].value.toTuple()
    );
  }
}

export class ProposalExecutedProposalStruct extends ethereum.Tuple {
  get endBlock(): BigInt {
    return this[0].toBigInt();
  }

  get title(): string {
    return this[1].toString();
  }

  get descriptionHash(): string {
    return this[2].toString();
  }

  get transactions(): Array<ProposalExecutedProposalTransactionsStruct> {
    return this[3].toTupleArray<ProposalExecutedProposalTransactionsStruct>();
  }
}

export class ProposalExecutedProposalTransactionsStruct extends ethereum.Tuple {
  get to(): Address {
    return this[0].toAddress();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }

  get data(): Bytes {
    return this[2].toBytes();
  }

  get gas(): BigInt {
    return this[3].toBigInt();
  }
}

export class MeloVault__proposalHashInputProposalStruct extends ethereum.Tuple {
  get endBlock(): BigInt {
    return this[0].toBigInt();
  }

  get title(): string {
    return this[1].toString();
  }

  get descriptionHash(): string {
    return this[2].toString();
  }

  get transactions(): Array<
    MeloVault__proposalHashInputProposalTransactionsStruct
  > {
    return this[3].toTupleArray<
      MeloVault__proposalHashInputProposalTransactionsStruct
    >();
  }
}

export class MeloVault__proposalHashInputProposalTransactionsStruct extends ethereum.Tuple {
  get to(): Address {
    return this[0].toAddress();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }

  get data(): Bytes {
    return this[2].toBytes();
  }

  get gas(): BigInt {
    return this[3].toBigInt();
  }
}

export class MeloVault extends ethereum.SmartContract {
  static bind(address: Address): MeloVault {
    return new MeloVault("MeloVault", address);
  }

  blocksAllowedForExecution(): BigInt {
    let result = super.call(
      "blocksAllowedForExecution",
      "blocksAllowedForExecution():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_blocksAllowedForExecution(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "blocksAllowedForExecution",
      "blocksAllowedForExecution():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  maxBlocksInFuture(): BigInt {
    let result = super.call(
      "maxBlocksInFuture",
      "maxBlocksInFuture():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_maxBlocksInFuture(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "maxBlocksInFuture",
      "maxBlocksInFuture():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  nft(): Address {
    let result = super.call("nft", "nft():(address)", []);

    return result[0].toAddress();
  }

  try_nft(): ethereum.CallResult<Address> {
    let result = super.tryCall("nft", "nft():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  onERC1155BatchReceived(
    param0: Address,
    param1: Address,
    param2: Array<BigInt>,
    param3: Array<BigInt>,
    param4: Bytes
  ): Bytes {
    let result = super.call(
      "onERC1155BatchReceived",
      "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigIntArray(param2),
        ethereum.Value.fromUnsignedBigIntArray(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC1155BatchReceived(
    param0: Address,
    param1: Address,
    param2: Array<BigInt>,
    param3: Array<BigInt>,
    param4: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC1155BatchReceived",
      "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigIntArray(param2),
        ethereum.Value.fromUnsignedBigIntArray(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  onERC1155Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: BigInt,
    param4: Bytes
  ): Bytes {
    let result = super.call(
      "onERC1155Received",
      "onERC1155Received(address,address,uint256,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromUnsignedBigInt(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC1155Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: BigInt,
    param4: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC1155Received",
      "onERC1155Received(address,address,uint256,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromUnsignedBigInt(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): Bytes {
    let result = super.call(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  proposalBlockTimes(param0: BigInt): BigInt {
    let result = super.call(
      "proposalBlockTimes",
      "proposalBlockTimes(uint64):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toBigInt();
  }

  try_proposalBlockTimes(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "proposalBlockTimes",
      "proposalBlockTimes(uint64):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  proposalExecuted(param0: BigInt): boolean {
    let result = super.call(
      "proposalExecuted",
      "proposalExecuted(uint64):(bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toBoolean();
  }

  try_proposalExecuted(param0: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "proposalExecuted",
      "proposalExecuted(uint64):(bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  proposalHash(proposal: MeloVault__proposalHashInputProposalStruct): BigInt {
    let result = super.call(
      "proposalHash",
      "proposalHash((uint256,string,string,(address,uint256,bytes,uint256)[])):(uint64)",
      [ethereum.Value.fromTuple(proposal)]
    );

    return result[0].toBigInt();
  }

  try_proposalHash(
    proposal: MeloVault__proposalHashInputProposalStruct
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "proposalHash",
      "proposalHash((uint256,string,string,(address,uint256,bytes,uint256)[])):(uint64)",
      [ethereum.Value.fromTuple(proposal)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  verifier(): Address {
    let result = super.call("verifier", "verifier():(address)", []);

    return result[0].toAddress();
  }

  try_verifier(): ethereum.CallResult<Address> {
    let result = super.tryCall("verifier", "verifier():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _nft(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _verifier(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ExecuteProposalCall extends ethereum.Call {
  get inputs(): ExecuteProposalCall__Inputs {
    return new ExecuteProposalCall__Inputs(this);
  }

  get outputs(): ExecuteProposalCall__Outputs {
    return new ExecuteProposalCall__Outputs(this);
  }
}

export class ExecuteProposalCall__Inputs {
  _call: ExecuteProposalCall;

  constructor(call: ExecuteProposalCall) {
    this._call = call;
  }

  get proposal(): ExecuteProposalCallProposalStruct {
    return changetype<ExecuteProposalCallProposalStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }

  get fact(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class ExecuteProposalCall__Outputs {
  _call: ExecuteProposalCall;

  constructor(call: ExecuteProposalCall) {
    this._call = call;
  }
}

export class ExecuteProposalCallProposalStruct extends ethereum.Tuple {
  get endBlock(): BigInt {
    return this[0].toBigInt();
  }

  get title(): string {
    return this[1].toString();
  }

  get descriptionHash(): string {
    return this[2].toString();
  }

  get transactions(): Array<ExecuteProposalCallProposalTransactionsStruct> {
    return this[3].toTupleArray<
      ExecuteProposalCallProposalTransactionsStruct
    >();
  }
}

export class ExecuteProposalCallProposalTransactionsStruct extends ethereum.Tuple {
  get to(): Address {
    return this[0].toAddress();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }

  get data(): Bytes {
    return this[2].toBytes();
  }

  get gas(): BigInt {
    return this[3].toBigInt();
  }
}

export class ProposeCall extends ethereum.Call {
  get inputs(): ProposeCall__Inputs {
    return new ProposeCall__Inputs(this);
  }

  get outputs(): ProposeCall__Outputs {
    return new ProposeCall__Outputs(this);
  }
}

export class ProposeCall__Inputs {
  _call: ProposeCall;

  constructor(call: ProposeCall) {
    this._call = call;
  }

  get proposal(): ProposeCallProposalStruct {
    return changetype<ProposeCallProposalStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }
}

export class ProposeCall__Outputs {
  _call: ProposeCall;

  constructor(call: ProposeCall) {
    this._call = call;
  }
}

export class ProposeCallProposalStruct extends ethereum.Tuple {
  get endBlock(): BigInt {
    return this[0].toBigInt();
  }

  get title(): string {
    return this[1].toString();
  }

  get descriptionHash(): string {
    return this[2].toString();
  }

  get transactions(): Array<ProposeCallProposalTransactionsStruct> {
    return this[3].toTupleArray<ProposeCallProposalTransactionsStruct>();
  }
}

export class ProposeCallProposalTransactionsStruct extends ethereum.Tuple {
  get to(): Address {
    return this[0].toAddress();
  }

  get value(): BigInt {
    return this[1].toBigInt();
  }

  get data(): Bytes {
    return this[2].toBytes();
  }

  get gas(): BigInt {
    return this[3].toBigInt();
  }
}

export class SetVerifierCall extends ethereum.Call {
  get inputs(): SetVerifierCall__Inputs {
    return new SetVerifierCall__Inputs(this);
  }

  get outputs(): SetVerifierCall__Outputs {
    return new SetVerifierCall__Outputs(this);
  }
}

export class SetVerifierCall__Inputs {
  _call: SetVerifierCall;

  constructor(call: SetVerifierCall) {
    this._call = call;
  }

  get _verifier(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetVerifierCall__Outputs {
  _call: SetVerifierCall;

  constructor(call: SetVerifierCall) {
    this._call = call;
  }
}
