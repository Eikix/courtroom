// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

/* Autogenerated file. Do not edit manually. */

// Import schema type
import { SchemaType } from "@latticexyz/schema-type/src/solidity/SchemaType.sol";

// Import store internals
import { IStore } from "@latticexyz/store/src/IStore.sol";
import { StoreSwitch } from "@latticexyz/store/src/StoreSwitch.sol";
import { StoreCore } from "@latticexyz/store/src/StoreCore.sol";
import { Bytes } from "@latticexyz/store/src/Bytes.sol";
import { Memory } from "@latticexyz/store/src/Memory.sol";
import { SliceLib } from "@latticexyz/store/src/Slice.sol";
import { EncodeArray } from "@latticexyz/store/src/tightcoder/EncodeArray.sol";
import { Schema, SchemaLib } from "@latticexyz/store/src/Schema.sol";
import { PackedCounter, PackedCounterLib } from "@latticexyz/store/src/PackedCounter.sol";

bytes32 constant _tableId = bytes32(abi.encodePacked(bytes16(""), bytes16("Crime")));
bytes32 constant CrimeTableId = _tableId;

struct CrimeData {
  string name;
  uint32 year;
  string description;
}

library Crime {
  /** Get the table's schema */
  function getSchema() internal pure returns (Schema) {
    SchemaType[] memory _schema = new SchemaType[](3);
    _schema[0] = SchemaType.STRING;
    _schema[1] = SchemaType.UINT32;
    _schema[2] = SchemaType.STRING;

    return SchemaLib.encode(_schema);
  }

  function getKeySchema() internal pure returns (Schema) {
    SchemaType[] memory _schema = new SchemaType[](1);
    _schema[0] = SchemaType.BYTES32;

    return SchemaLib.encode(_schema);
  }

  /** Get the table's metadata */
  function getMetadata() internal pure returns (string memory, string[] memory) {
    string[] memory _fieldNames = new string[](3);
    _fieldNames[0] = "name";
    _fieldNames[1] = "year";
    _fieldNames[2] = "description";
    return ("Crime", _fieldNames);
  }

  /** Register the table's schema */
  function registerSchema() internal {
    StoreSwitch.registerSchema(_tableId, getSchema(), getKeySchema());
  }

  /** Register the table's schema (using the specified store) */
  function registerSchema(IStore _store) internal {
    _store.registerSchema(_tableId, getSchema(), getKeySchema());
  }

  /** Set the table's metadata */
  function setMetadata() internal {
    (string memory _tableName, string[] memory _fieldNames) = getMetadata();
    StoreSwitch.setMetadata(_tableId, _tableName, _fieldNames);
  }

  /** Set the table's metadata (using the specified store) */
  function setMetadata(IStore _store) internal {
    (string memory _tableName, string[] memory _fieldNames) = getMetadata();
    _store.setMetadata(_tableId, _tableName, _fieldNames);
  }

  /** Get name */
  function getName(bytes32 id) internal view returns (string memory name) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((id));

    bytes memory _blob = StoreSwitch.getField(_tableId, _keyTuple, 0);
    return (string(_blob));
  }

  /** Get name (using the specified store) */
  function getName(IStore _store, bytes32 id) internal view returns (string memory name) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((id));

    bytes memory _blob = _store.getField(_tableId, _keyTuple, 0);
    return (string(_blob));
  }

  /** Set name */
  function setName(bytes32 id, string memory name) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((id));

    StoreSwitch.setField(_tableId, _keyTuple, 0, bytes((name)));
  }

  /** Set name (using the specified store) */
  function setName(IStore _store, bytes32 id, string memory name) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((id));

    _store.setField(_tableId, _keyTuple, 0, bytes((name)));
  }

  /** Get the length of name */
  function lengthName(bytes32 id) internal view returns (uint256) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((id));

    uint256 _byteLength = StoreSwitch.getFieldLength(_tableId, _keyTuple, 0, getSchema());
    return _byteLength / 1;
  }

  /** Get the length of name (using the specified store) */
  function lengthName(IStore _store, bytes32 id) internal view returns (uint256) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((id));

    uint256 _byteLength = _store.getFieldLength(_tableId, _keyTuple, 0, getSchema());
    return _byteLength / 1;
  }

  /** Get an item of name (unchecked, returns invalid data if index overflows) */
  function getItemName(bytes32 id, uint256 _index) internal view returns (string memory) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((id));

    bytes memory _blob = StoreSwitch.getFieldSlice(_tableId, _keyTuple, 0, getSchema(), _index * 1, (_index + 1) * 1);
    return (string(_blob));
  }

  /** Get an item of name (using the specified store) (unchecked, returns invalid data if index overflows) */
  function getItemName(IStore _store, bytes32 id, uint256 _index) internal view returns (string memory) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((id));

    bytes memory _blob = _store.getFieldSlice(_tableId, _keyTuple, 0, getSchema(), _index * 1, (_index + 1) * 1);
    return (string(_blob));
  }

  /** Push a slice to name */
  function pushName(bytes32 id, string memory _slice) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((id));

    StoreSwitch.pushToField(_tableId, _keyTuple, 0, bytes((_slice)));
  }

  /** Push a slice to name (using the specified store) */
  function pushName(IStore _store, bytes32 id, string memory _slice) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((id));

    _store.pushToField(_tableId, _keyTuple, 0, bytes((_slice)));
  }

  /** Pop a slice from name */
  function popName(bytes32 id) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((id));

    StoreSwitch.popFromField(_tableId, _keyTuple, 0, 1);
  }

  /** Pop a slice from name (using the specified store) */
  function popName(IStore _store, bytes32 id) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((id));

    _store.popFromField(_tableId, _keyTuple, 0, 1);
  }

  /** Update a slice of name at `_index` */
  function updateName(bytes32 id, uint256 _index, string memory _slice) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((id));

    StoreSwitch.updateInField(_tableId, _keyTuple, 0, _index * 1, bytes((_slice)));
  }

  /** Update a slice of name (using the specified store) at `_index` */
  function updateName(IStore _store, bytes32 id, uint256 _index, string memory _slice) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((id));

    _store.updateInField(_tableId, _keyTuple, 0, _index * 1, bytes((_slice)));
  }

  /** Get year */
  function getYear(bytes32 id) internal view returns (uint32 year) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((id));

    bytes memory _blob = StoreSwitch.getField(_tableId, _keyTuple, 1);
    return (uint32(Bytes.slice4(_blob, 0)));
  }

  /** Get year (using the specified store) */
  function getYear(IStore _store, bytes32 id) internal view returns (uint32 year) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((id));

    bytes memory _blob = _store.getField(_tableId, _keyTuple, 1);
    return (uint32(Bytes.slice4(_blob, 0)));
  }

  /** Set year */
  function setYear(bytes32 id, uint32 year) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((id));

    StoreSwitch.setField(_tableId, _keyTuple, 1, abi.encodePacked((year)));
  }

  /** Set year (using the specified store) */
  function setYear(IStore _store, bytes32 id, uint32 year) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((id));

    _store.setField(_tableId, _keyTuple, 1, abi.encodePacked((year)));
  }

  /** Get description */
  function getDescription(bytes32 id) internal view returns (string memory description) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((id));

    bytes memory _blob = StoreSwitch.getField(_tableId, _keyTuple, 2);
    return (string(_blob));
  }

  /** Get description (using the specified store) */
  function getDescription(IStore _store, bytes32 id) internal view returns (string memory description) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((id));

    bytes memory _blob = _store.getField(_tableId, _keyTuple, 2);
    return (string(_blob));
  }

  /** Set description */
  function setDescription(bytes32 id, string memory description) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((id));

    StoreSwitch.setField(_tableId, _keyTuple, 2, bytes((description)));
  }

  /** Set description (using the specified store) */
  function setDescription(IStore _store, bytes32 id, string memory description) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((id));

    _store.setField(_tableId, _keyTuple, 2, bytes((description)));
  }

  /** Get the length of description */
  function lengthDescription(bytes32 id) internal view returns (uint256) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((id));

    uint256 _byteLength = StoreSwitch.getFieldLength(_tableId, _keyTuple, 2, getSchema());
    return _byteLength / 1;
  }

  /** Get the length of description (using the specified store) */
  function lengthDescription(IStore _store, bytes32 id) internal view returns (uint256) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((id));

    uint256 _byteLength = _store.getFieldLength(_tableId, _keyTuple, 2, getSchema());
    return _byteLength / 1;
  }

  /** Get an item of description (unchecked, returns invalid data if index overflows) */
  function getItemDescription(bytes32 id, uint256 _index) internal view returns (string memory) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((id));

    bytes memory _blob = StoreSwitch.getFieldSlice(_tableId, _keyTuple, 2, getSchema(), _index * 1, (_index + 1) * 1);
    return (string(_blob));
  }

  /** Get an item of description (using the specified store) (unchecked, returns invalid data if index overflows) */
  function getItemDescription(IStore _store, bytes32 id, uint256 _index) internal view returns (string memory) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((id));

    bytes memory _blob = _store.getFieldSlice(_tableId, _keyTuple, 2, getSchema(), _index * 1, (_index + 1) * 1);
    return (string(_blob));
  }

  /** Push a slice to description */
  function pushDescription(bytes32 id, string memory _slice) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((id));

    StoreSwitch.pushToField(_tableId, _keyTuple, 2, bytes((_slice)));
  }

  /** Push a slice to description (using the specified store) */
  function pushDescription(IStore _store, bytes32 id, string memory _slice) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((id));

    _store.pushToField(_tableId, _keyTuple, 2, bytes((_slice)));
  }

  /** Pop a slice from description */
  function popDescription(bytes32 id) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((id));

    StoreSwitch.popFromField(_tableId, _keyTuple, 2, 1);
  }

  /** Pop a slice from description (using the specified store) */
  function popDescription(IStore _store, bytes32 id) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((id));

    _store.popFromField(_tableId, _keyTuple, 2, 1);
  }

  /** Update a slice of description at `_index` */
  function updateDescription(bytes32 id, uint256 _index, string memory _slice) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((id));

    StoreSwitch.updateInField(_tableId, _keyTuple, 2, _index * 1, bytes((_slice)));
  }

  /** Update a slice of description (using the specified store) at `_index` */
  function updateDescription(IStore _store, bytes32 id, uint256 _index, string memory _slice) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((id));

    _store.updateInField(_tableId, _keyTuple, 2, _index * 1, bytes((_slice)));
  }

  /** Get the full data */
  function get(bytes32 id) internal view returns (CrimeData memory _table) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((id));

    bytes memory _blob = StoreSwitch.getRecord(_tableId, _keyTuple, getSchema());
    return decode(_blob);
  }

  /** Get the full data (using the specified store) */
  function get(IStore _store, bytes32 id) internal view returns (CrimeData memory _table) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((id));

    bytes memory _blob = _store.getRecord(_tableId, _keyTuple, getSchema());
    return decode(_blob);
  }

  /** Set the full data using individual values */
  function set(bytes32 id, string memory name, uint32 year, string memory description) internal {
    bytes memory _data = encode(name, year, description);

    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((id));

    StoreSwitch.setRecord(_tableId, _keyTuple, _data);
  }

  /** Set the full data using individual values (using the specified store) */
  function set(IStore _store, bytes32 id, string memory name, uint32 year, string memory description) internal {
    bytes memory _data = encode(name, year, description);

    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((id));

    _store.setRecord(_tableId, _keyTuple, _data);
  }

  /** Set the full data using the data struct */
  function set(bytes32 id, CrimeData memory _table) internal {
    set(id, _table.name, _table.year, _table.description);
  }

  /** Set the full data using the data struct (using the specified store) */
  function set(IStore _store, bytes32 id, CrimeData memory _table) internal {
    set(_store, id, _table.name, _table.year, _table.description);
  }

  /** Decode the tightly packed blob using this table's schema */
  function decode(bytes memory _blob) internal view returns (CrimeData memory _table) {
    // 4 is the total byte length of static data
    PackedCounter _encodedLengths = PackedCounter.wrap(Bytes.slice32(_blob, 4));

    _table.year = (uint32(Bytes.slice4(_blob, 0)));

    // Store trims the blob if dynamic fields are all empty
    if (_blob.length > 4) {
      uint256 _start;
      // skip static data length + dynamic lengths word
      uint256 _end = 36;

      _start = _end;
      _end += _encodedLengths.atIndex(0);
      _table.name = (string(SliceLib.getSubslice(_blob, _start, _end).toBytes()));

      _start = _end;
      _end += _encodedLengths.atIndex(1);
      _table.description = (string(SliceLib.getSubslice(_blob, _start, _end).toBytes()));
    }
  }

  /** Tightly pack full data using this table's schema */
  function encode(string memory name, uint32 year, string memory description) internal view returns (bytes memory) {
    uint40[] memory _counters = new uint40[](2);
    _counters[0] = uint40(bytes(name).length);
    _counters[1] = uint40(bytes(description).length);
    PackedCounter _encodedLengths = PackedCounterLib.pack(_counters);

    return abi.encodePacked(year, _encodedLengths.unwrap(), bytes((name)), bytes((description)));
  }

  /** Encode keys as a bytes32 array using this table's schema */
  function encodeKeyTuple(bytes32 id) internal pure returns (bytes32[] memory _keyTuple) {
    _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((id));
  }

  /* Delete all data for given keys */
  function deleteRecord(bytes32 id) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((id));

    StoreSwitch.deleteRecord(_tableId, _keyTuple);
  }

  /* Delete all data for given keys (using the specified store) */
  function deleteRecord(IStore _store, bytes32 id) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = bytes32((id));

    _store.deleteRecord(_tableId, _keyTuple);
  }
}
