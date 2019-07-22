import React from 'react';
import './Modal.css';
import Backdrop from './Backdrop';
const modal = (props) =>{
    return(
        // <div>
        
        // <Modal
        //   title="Basic Modal"
        //   visible={this.state.visible}
        //   onOk={this.handleOk}
        //   onCancel={this.handleCancel}
        // >
        //     {props.children}
        // </Modal>
        // </div>
        <div>
            <div className="Modal">
               Edit Form: {props.children}
           </div>
        </div>
    )
};
export default modal;

// import { Modal, Button } from 'antd';

// class Modal extends React.Component {
//   state = { visible: false };

//   showModal = () => {
//     this.setState({
//       visible: true,
//     });
//   };

//   handleOk = e => {
//     console.log(e);
//     this.setState({
//       visible: false,
//     });
//   };

//   handleCancel = e => {
//     console.log(e);
//     this.setState({
//       visible: false,
//     });
//   };

//   render() {
//     return (
//       <div>
//         <Button type="primary" onClick={this.showModal}>
//           Open Modal
//         </Button>
//         <Modal
//           title="Basic Modal"
//           visible={this.state.visible}
//           onOk={this.handleOk}
//           onCancel={this.handleCancel}
//         >
//         </Modal>
//       </div>
//     );
//   }
// }
// ReactDOM.render(<Modal />, mountNode);