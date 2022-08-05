import { Switch, Route } from "react-router-dom";
import Doisong from "./doisong/Doisong";
import Footer from "./footer/Footer"
import Gocnhin from "./gocnhin/Gocnhin";
import Home from "./home/Home"
import QuocTe from "./quocte/QuocTe";
import Thegioi from "./thegioi/Thegioi";
import Thoisu from "./thoisu/Thoisu";

function LayoutHeaderFooter(){
    return(
        <div >
            <Home/>
                <Switch>
                    <Route path={'/doisong'} component={Doisong} exact={true}/>
                    <Route path={'/gocnhin'} component={Gocnhin} exact={true}/>
                    <Route path={'/quocte'} component={QuocTe} exact={true}/>
                    <Route path={'/thegioi'} component={Thegioi} exact={true}/>
                    <Route path={'/thoisu'} component={Thoisu} exact={true}/>
                </Switch>
            <Footer/>
        </div>
    )
}
export default LayoutHeaderFooter