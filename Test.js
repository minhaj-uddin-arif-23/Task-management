//  mutable and immutable conflict easy

import {produce} from "immer"

const user1 = {
  name : "Minhaj Uddin Arif",
  education:{
    instituteName : "BGC trust Univercity of Bangladesh",
    Since : 2001,
    Degree : "B.sc In computer science and engineering"
  }
}

const User2 = produce(user1,(newUser) => {
  newUser.name = "Akash",
  newUser.education.Since =2003,
  newUser.education.instituteName = 'XYZ'
})
console.log(user1)
console.log(User2)