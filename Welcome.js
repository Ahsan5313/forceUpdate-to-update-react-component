
import React,{Component} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class Welcome extends Component{

   constructor(){

    super();

    this.refreshNow = this.refreshNow.bind(this);
   }

  refreshNow(){

    this.forceUpdate();
  }
       render(){

        return(

          <div>
              <button onClick= {this.refreshNow}>Refresh</button>
              <h1>{Math.floor(Math.random()*10 + 1)}</h1>
          </div>
        );
       }
}
export default Welcome;