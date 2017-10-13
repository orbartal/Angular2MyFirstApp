# Angular2MyFirstApp
My first app in angular 2

Based on:
http://naywinmyint.com/getting-started-with-angular-2-part-1-hello-world/ 
http://naywinmyint.com/typescript-for-angular-2-part-1/

=Files in project=
tsconfig.json - Config the TypeScript compiler
typings.json - Provide external type script definitions of existing JavaScript libraries (that are not written in type script). 
package.json - npm config file. Enable npm to download the dependencies js libraries the project need.
.typingsrc - solve npm install error dau to proxy in intelliware network.
bs-config.json - config file for npm start : port, path to index.html and to node_modules ...

=info=
node - js server - https://en.wikipedia.org/wiki/Node.js
npm - package manager for the JavaScript - https://en.wikipedia.org/wiki/Npm_(software)

ECMAScript - ECMAScript specification is a standardized specification of a scripting language such as js. - https://en.wikipedia.org/wiki/ECMAScript
TypeScript - static typing in js - https://en.wikipedia.org/wiki/TypeScript
tsc -  The TypeScript compiler,

TypeScript is a strict superset of ECMAScript 2015, which is itself a superset of ECMAScript 5, commonly referred to as JavaScript
The annotations for the primitive types are number, boolean and string. Weakly- or dynamically-typed structures are of type any

https://www.typescriptlang.org/docs/handbook/advanced-types.html
TypeScript variables types: Primitive, Array, Fubnctions, Object, Union and parameter (Generic).
Primitive - Number, String, Boolean, Void, Null, Enum and Undefined.
Array  - like javascript array: push, join, splice, push.
Object - Like objcets in java and not like in javascript.
Parameter - Like generic type in java. 
Intersection (v : X & Y) - v is a variable that is both of Type X or Y (or both).
Union (v : X | S) -  v is a variable that is either of Type X or Y (or both).
See also Discriminated\tagged  Unions. A tagged union type is a union type whose member types all define a discriminant property of a literal type.
Aliases - Aliasing doesn’t actually create a new type - it creates a new name to refer to that type. 
String Literal Types - enum-like behavior with strings.
Numeric Literal Types - enum-like behavior with strings.
 
ambient type definitions - allows us to provide external type definitions of the existing JavaScript libraries.
typings.json

=commands=
node --version
npm --version
tsc -v


npm install
npm start
npm config set strict-ssl false
npm config set insecure true
npm config set rejectUnauthorized false
npm config ls -l