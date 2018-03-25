import React from 'react';
import CardList from '../components/CardList';
import CustomSlidingPane from '../components/CustomSlidingPane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import './index.css';
import {connect} from 'react-redux';
import {fetchData, panelEnterClick, panelExitClick} from '../js/reducers/action';
import Modal from 'react-modal';
import iconMap from '../assets/icon_map@2x.png';

class App extends React.Component {

//callback on clicking on a restaurant option   
onClick = (restaurant) => {
    this.props.panelEnterClick(this.props.isPanelOpen, restaurant)
}

//callback fired on closing side panel
onRequestCloseAction = () => {   
    this.props.panelExitClick(this.props.isPanelOpen)
} 
    
componentDidMount() {
    Modal.setAppElement(this.el);
    this.props.fetchData()
} 
    

render() {
    return (
        <div ref={ref => this.el = ref} className='tc'>
        <div className = 'heading'>
            <div className='subHeading'><p className = 'headingText' >Lunch Tyme</p></div>
            <div className='subHeading'><img  
                alt='photo' 
                src={iconMap}/></div>
            </div>
        <CardList 
            onClick={this.onClick} 
            restaurants = {this.props.restaurants}/> 
        <CustomSlidingPane 
            isPanelOpen={this.props.isPanelOpen} 
            onRequestCloseAction={this.onRequestCloseAction}
            selectedRestuarant = {this.props.selectedRestuarants}/>
        </div>
    );    
 }
}

const mapStateToProps = state => {
  return { 
      restaurants: state.restaurants,
      isPanelOpen: state.isPanelOpen,
      selectedRestuarants: state.selectedRestuarants
  };
};

const mapDispatchToProps = {
    fetchData: fetchData,
    panelEnterClick: panelEnterClick,
    panelExitClick: panelExitClick
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
