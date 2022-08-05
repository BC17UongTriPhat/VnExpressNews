import { Switch, Route } from "react-router-dom";
import Doisong from "./page/doisong/Doisong";
import Footer from "./page/footer/Footer"
import Gocnhin from "./page/gocnhin/Gocnhin";
import Home from "./page/home/Home"
import QuocTe from "./page/quocte/QuocTe";
import Thegioi from "./page/thegioi/Thegioi";
import Thoisu from "./page/thoisu/Thoisu";

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