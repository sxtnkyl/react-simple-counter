import React, { Component } from "react";

class Counter extends Component {
  //removed this.state to create controlled component, establish truth
  //updated all previous this.state with removal
  //     state = {
  //     value: this.props.counter.value,
  //     tags: ["tag1", "tag2", "tag3"]
  //   };

  //(see A)   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  styles = {
    fontSize: 20,
    fontWeight: "bold"
  };

  renderTags() {
    if (this.props.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.props.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  //(see A)   handleIncrement() {
  //use the arrow function syntax to avoid binding 'this' in constructor
  //
  //removed this method. counter is controlled component, needs to raise event
  //to counters and have parent modify data, call method in props object
  //   handleIncrement = () => {
  //     this.setState({ value: this.state.value + 1 });
  //   };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }

  render() {
    return (
      <div>
        <h4>Counter #{this.props.counter.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          type="button"
          //onClick={this.handleIncrement}
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-primary btn-md"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* {this.renderTags()} */}
      </div>
    );
  }
}

export default Counter;
