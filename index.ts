// let username = {
//     name : "ritesh laxman gupta"
// }

// let firstname : string = 'ritesh'
// firstname = 'gupta'

// const addNumber = (num1 : number, num2 : number):number => {

//     return num1 + num2
// }

// const userInformation = ({name:string, isPaid:boolean, email:string}):{} => {

//     return {}
// }


// userInformation({name:'ritesh', isPaid:false, email:"ritesh7767@outlook.com"})

// type User = {
//     name : string, 
//     username : string,
//     email : string,
//     password : string,
//     isActive : boolean
// }


// const userInformation = (user:User) : {} => {

//     return {}
// }

// userInformation({name:"ritesh", username : "ritesh7767", email : "ritesh7767@gmail.com", password : "ritesh@7767", isActive : true})

// type User = {
//     readonly _id : number
//     username : string,
//     email : string,
//     password : string,
//     isActive : boolean,
//     creditNumber? : number
// }

// let ritesh:User = {
//     _id : 123,
//     username : "ritesh7767",
//     email : "ritesh7767@gmail.com",
//     password : "Ritesh@7767",
//     isActive : true,
// }

// type username = {
//     username : string
// }

// type userpassword = {
//     password : string
// }

// type userInformation = username & userpassword & {
//     fullname : string,
//     isActive : boolean
// }

// let vivek:userInformation = {
//     username : "Ritesh7767",
//     password : 'Ritesh27767',
//     fullname : "ritesh laxman gupta",
//     isActive : true
// }

// let username : number | string = 7767

// username = 'ritesh7767'

// type User = string | number

// type User = {
//     username : string | number
// }

// const userInformation = (user : User) : void => {
//     if(typeof user == 'string') {
//         let result = user.toLowerCase
//     }
// }

// const userInformation = (username : string | number) => {

//     if(typeof username == 'string') username.toLowerCase()
// }

// let ritesh : string[] | number[] | boolean[] = [1, 2, "ritesh", true]

// let supercars : (string | number | boolean)[] = ["bugatti", true, 34]

// let name : "ritesh" | "vivek" | "ritu" = "ritesh"
// console.log(name)

// let employee:[number, string] = [123, 'ritesh']

// employee[1] = "vivek"

// employee.push("laxman")


// interface User {
//     readonly _id : number
//     username : string,
//     email : string,
//     password : string,
//     discount :number
//     isActive? : boolean
//     startTrial? : () => string
//     discountPeriod?() : number
//     getCoupon(username : string, memberType : string, isActive:boolean) : string
// }

// interface User {
//     outlookId : string
// }

// interface Admin extends User{
//     roleType : "manager" | 'senior manager' | 'store manager'
// }

// let ritesh: Admin = {
//     roleType : 'manager',
//     _id : 78768,
//     outlookId : 'ritesh7767@outlook.com',
//     username : 'Ritesh7767',
//     email : 'ritesh7767@outlook.com',
//     password : 'Ritesh7767',
//     discount : 78,
//     getCoupon : (name:'hitesh', member:'leader', status : true) => 'ritesh776710'
// }


// let supercars: readonly string[] = ['ferrari', 'lamborgini', 'bugatti']

// let tuple : readonly [number, string, boolean] = [2, 'ritesh', true]


// type Person1 = {
//     firstname : string,
//     lastname : string,
//     fullname?() : string
// }

// type User = Person1 & {
//     username : string,
//     password : string,
//     isActive : boolean
// }

// interface Person{
//     firstname : string,
//     lastname : string,
//     fullname() : string
// }

// interface Employee extends Person{
//     username : string,
//     password : string,
//     salary : number,
//     isActive : boolean
// }

// let ritesh : Employee = {
//     firstname : 'ritesh',
//     lastname : 'gupta',
//     fullname : function(){return this.firstname + ' ' + this.lastname},
//     username : 'Ritesh7767',
//     password : 'Ritesh@7767',
//     salary : 50000,
//     isActive : true
// }

// let userInformation : User = {
//     firstname : 'ritesh',
//     lastname : 'gupta',
//     fullname : function(){
//         return `${this.firstname} ${this.lastname}`
//     },
//     username : 'ritesh',
//     password : 'ritesh@7767',
//     isActive : false
// }

// function add(num1 : number, num2 : number, num3?:number):number{
//     return num1 + num2 + (num3 || 0)
// }

// function addMultiple(num1: number, num2:number, ...rest:number[]){
//     return num1 + num2 + rest.reduce((a,c) => a + c, 0)
// }

// type sub = (num1 : number, num2:number) => number

// function Subtraction : sub = (num1, num2) => num1 - num2

// class Person{
//     private name : string
//     public constructor(name:string){
//         this.name = name
//     }
//     public getName():string{
//         return this.name
//     }
// }

// class Employee{
//     constructor(private name : string, private email : string, private profession: string){}
//     get getName():string{
//         return this.name
//     }
//     set setName(newName:string){
//         this.name = newName
//     }
// }

// let rinky = new Employee('rinky', 'rinky9867@gmail.com', 'teacher')

// let vivek = new Person('vivek')

// addMultiple(1,2)
// add(1, 2, 3)

// class Person{

//     protected familyCount:number = 6
//     protected hobbie : string = 'coding'
//     constructor(protected firstname : string, protected lastname : string){}
//     private fullname():string{
//         return `${this.firstname} ${this.lastname}`
//     }
//     protected setFamilyCount(newCount:number):void{
//         this.familyCount = newCount
//     }
// }

// class Employee extends Person{
//     protected firstname : string
//     protected lastname : string
//     private email : string
//     private isActive : boolean

//     constructor(firstname: string, lastname: string, email: string, isActive: boolean){
//         super(firstname, lastname)
//         this.email = email
//         this.isActive = isActive
//     }
//     public get FamilyCount():number{
//         return this.familyCount
//     }
//     public set FamilyCount(newCount : number){
//         this.setFamilyCount(newCount)
//     }
// }

// abstract class Car{
//     constructor(protected carName:string){}
//     abstract start():void
//     horn():void{
//         console.log('honk, honk')
//     }
// }

// class fortuner extends Car{
//     constructor(protected carName : string, private color : string, private isNew : boolean){
//         super(carName)
//     }
//     public start(){
//         console.log("started")
//         return 'ritesh'
//     }
//     public stop():void{
//         console.log('stoped')
//     }
// }

// let newFortuner = new fortuner('fortuner', 'black', true)

// const greeting<Type> = (value : Type): Type => {}
// const ritesh<Type> = (name:Type):Type => name

// function greeting<Type>(value : Type):Type {
//     return value
// }

// let supercars : Array<string> = ['ferrari', 'lambogini', 'ford']

// const ritesh = <T,>(products : T[]):T => products[2]

// interface DataBase{
//     username : string,
//     password : string,
//     isActive : boolean
// }

// function userInformation<T, U extends DataBase>(value : T, value1 : U):{}{
//     return {
//         value,
//         value1
//     }
// }

// interface data {
//     img : string,
//     title : string,
//     price? : string | number,
//     category? : string,
//     id? : number
// }

// let productData:data[] = [
//     {
//         img : 'image',
//         title : 'ritesh',
//     }
// ]

const x : number  = 1
// x = "ritesh"
console.log(x)















export {}