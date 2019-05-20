// import React from 'react';

// const CardTab = React.createClass({
//     displayName: 'Tabs',
//     getDefaultProps() {
//       return {
//         selected: 0
//       };
//     },
//     getInitialState() {
//       return {
//         selected: this.props.selected
//       };
//     },
//     handleClick(index, event) {
//       event.preventDefault();
//       this.setState({
//         selected: index
//       });
//     },
//     _renderTitles() {
//       function labels(child, index) {
//         let activeClass = (this.state.selected === index ? 'active' : '');
//         return (
//           <li>
//             <a href="#">
//               {child.props.label}
//             </a>
//           </li>
//         );
//       }
//       return (
//         <ul>
//           {this.props.children.map(labels.bind(this))}
//         </ul>
//       );
//     },
//     _renderContent() {
//       return (
//         <div>
//           {this.props.children[this.state.selected]}
//         </div>
//       );
//     },
//     render() {
//       return (
//         <div>
//           {this._renderTitles()}
//           {this._renderContent()}
//         </div>
//       );
//     }
//   });

// export default CardTab;