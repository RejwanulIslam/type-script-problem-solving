**Interface vs Type পার্থক্য:**
1. Interface: শুধু Object-এর জন্য তৈরি — Type আরও বহুমুখী
Interface দিয়ে মূলত:

object shape define করা,

class contract define করা।

Type মূলত:

object,
string union,
tuple,
primitives,
সবই define করা যায়।

2. Interface extend করা সহজ  Type extend করতে কিছুটা limit আছে

3. Function, Array, Tuple — type দিয়ে define করা সহজ

Interface দিয়েও function define করা যায়, কিন্তু tuple/array define করা ঝামেলা।



 **keyof এর ব্যবহার:**
 1. Object-এর valid key পাওয়া
 2. Type-safe function create করা
 3. Dynamic property access type-safe করা
 4. Reusable utility types বানানো
 Example — Basic
interface User {
  name: string;
  age: number;
  email: string;
}

type UserKeys = keyof User; 


এখন UserKeys এর মান হবে:

type UserKeys = "name" | "age" | "email";


মানে User object-এর সব key এর নাম নিয়ে একটি union type তৈরি হলো।

 Example — Using keyof in a Function

 এমন একটি function বানাতে চাই যেখানে object-এর যে কোনো valid key send করা যাবে।

function getValue<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const user = {
  name: "Rejwan",
  age: 22,
};


ফাংশন কল:

const value1 = getValue(user, "name")
const value2 = getValue(user, "age")


 এখ.নে keyof T নিশ্চিত করছে যে key অবশ্যই object-এর valid property হতে হবে।
