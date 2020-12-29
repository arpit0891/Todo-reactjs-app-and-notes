import React from "react"
import Footer from './Footer'
import TodoItem from "./TodoItem"
import TodoData from "./TodoData"
// //import ReactDOM from "react-dom"
// function App(){
//     const todoItems= TodoData.map(item => <TodoItem key={item.id} item={item} />)
// return (
//     //Note: can return only one 
//     <div className="todo-list">
//     {// note do not double declare things}
//     {/* < TodoItem /> */}
//     {todoItems}    
//     < Footer />
//     </div>
//     )
// }
// Class based

// class App extends React.Component{
//     yourmethodhere(){

//     }
//     render(){
//         //Always include this keyword before whatever you are taking
//         const style=this.yourmethodhere()
//         const date =new Date();
//         return(
//             <div>
//                 Your code
//                 </div>
//         )
//     }
// }
// class App extends React.Component{
//     constructor(){
// super()
// //bring goodies from whatever you are extending or make them global
//     this.state = {
//     answer: "Yes"
//     }
//     }
//     render(){
//         //Always include this keyword before whatever you are taking
//         const date =new Date();
//         return(
//             <div>
//                 Your code {this.state.answer}
//                 {/* <ChildComponet answer={this.state.answer} /> */}
//                </div>
//         )
//     }
// }

// class App extends React.Component{
//     constructor(){
//         super()
//         this.state ={
//             todos: TodoData,
//             count: 0
//         }
//         this.handleClick=this.handleClick.bind(this)
//     }
//     handleClick(){
//         this.setState(prevState =>{
//             return{
//                 count: prevState.count + 1
//             }
//         })
//     }
//     // componentWillMount(){

//     // }
//     // componentDidMount(){
//     //     //Get the data I neeed to corectly display
//     // }
//     // componentWillReceiveProps(nextProps){
//     //     if (nextProps.whatever) !== this.props.whatever ){
//     //         //do something important
//     //     }
//     // }
//     // shouldComponentUpdate(nextProps, nextState){
//     //     //return true if want it to update
//     //     //return false if not
//     // }
//     // componentWillUnmount(){
//     //     //teardown or cleanup your codebefore your component disappear
//     // }

//         render(){
//             const todoItems= TodoData.map(item => <TodoItem key={item.id} item={item} />)
//             return(
//                 <div className="todo-list">
//                     {todoItems}
//                     {this.state.count}
//                     <button 
//                     onClick=
//                     {this.handleClick}>
//                         Click here
//                    </button>
//                   {/*</div><ChildComponet count={this.state.count}> */}
//                     </div>
//             )
//         }
// }
//Login 
// class App extends React.Component {
//     constructor(){
//         super()
//         this.state={
//             isLocggedin: false
//         }
//         this.handleClick=this.handleClick.bind(this)
//     }
//     handleClick(){
//         this.setState(prevState =>
//             {
//                 return{
//                     isLoggedin: !prevState.isLoggedin
//                 }
//             })
//     }
//     render(){
//            let buttontext=this.state.isLoggedin?"Log out":"Login"
//            return (
     
//         <div>
//             <button onClick={this.handleClick}>{buttontext}</button>
//         </div>
//     )
// }
// }
// class App extends React.Component{
//     constructor(){
//         super()
//         this.state ={
//             todos: TodoData
//         }
//         this.handleChange=this.handleChange.bind(this)
//     }

//     handleChange(id){
                
               
//                 this.setState(prevState =>
//                 {   //count: prevState.count + 1
//                     const updatedTodos= prevState.todos.map(todo =>{
//                         if (todo.id===id){
//                             todo.completed = ! todo.completed
//                         }
//                         return todo;
                        
//                 }
//                 )
//                 return {
//                     todos: updatedTodos
//                 }
           
            
//         })
//     }

//         render(){
//             const todoItems= TodoData.map(item => 
//             <TodoItem key={item.id} item={item} 
//             handleChange={this.handleChange} 
//             />)
//             return(
//                 <div className="todo-list">
//                     {todoItems}
//                     {this.state.count}
//                     </div>
//             )
//         }
// }
//Fetching data from api

class App extends React.Component{
    constructor(){
        super()
        this.state ={
            todos: TodoData
        }
        this.handleChange=this.handleChange.bind(this)
    }

    handleChange(id){
                
               
                this.setState(prevState =>
                {   //count: prevState.count + 1
                    const updatedTodos= prevState.todos.map(todo =>{
                        if (todo.id===id){
                            todo.completed = ! todo.completed
                        }
                        return todo;
                        
                }
                )
                return {
                    todos: updatedTodos
                }
           
            
        })
    }

        render(){
            const todoItems= TodoData.map(item => 
            <TodoItem key={item.id} item={item} 
            handleChange={this.handleChange} 
            />)
            return(
                <div className="todo-list">
                    {todoItems}
                    {this.state.count}
                    </div>
            )
        }
}
export default App