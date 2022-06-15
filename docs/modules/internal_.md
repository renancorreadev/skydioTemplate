[TypeDoc Pages Plugin](../README.md) / [Exports](../modules.md) / <internal\>

# Namespace: <internal\>

## Table of contents

### Type Aliases

- [Extract](internal_.md#extract)
- [Prefixed](internal_.md#prefixed)
- [TransformProps](internal_.md#transformprops)

## Type Aliases

### Extract

Ƭ **Extract**<`T`, `U`\>: `T` extends `U` ? `T` : `never`

Extract from T those types that are assignable to U

#### Type parameters

| Name |
| :--- |
| `T`  |
| `U`  |

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1577

---

### Prefixed

Ƭ **Prefixed**<`K`, `T`\>: \`${K}${Extract<T, boolean \| number \| string\>}\`

Returns a string with the given prefix followed by the given values.

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `K`  | extends `string` |
| `T`  | `T`              |

#### Defined in

node_modules/@stitches/react/types/util.d.ts:5

---

### TransformProps

Ƭ **TransformProps**<`Props`, `Media`\>: { [K in keyof Props]: Props[K] \| { [KMedia in Prefixed<"@", "initial" \| keyof Media\>]?: Props[K] } & { [KMedia in string]: Props[K] } }

#### Type parameters

| Name    |
| :------ |
| `Props` |
| `Media` |

#### Defined in

node_modules/@stitches/react/types/styled-component.d.ts:87
