import { Component } from "react";
import DotLoader from 'react-spinners/DotLoader'
export default class Loader extends Component{
    render() {
        return (
            <div className="sp-loader">
                <DotLoader
                    size={30}
                    margin={5}
                    color={'#4A90E2'}
                    loading={true}
                />
            </div>
        )
    }
}
