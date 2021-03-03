import React, { Component } from "react";

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elapsed: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        elapsed: Math.floor(
          (new Date().getTime() - this.props.start.getTime()) / 1000
        )
      });
    });
  }

  componentWillUnmount() {
    delete this.interval;
  }
 

  render() {
    const { elapsed } = this.state;
    let time
    let i
    if (elapsed<10)
    time="00:0"+elapsed
    else if(elapsed<60)
    time="00:"+elapsed
    else if(elapsed<600)
    {   i=Math.floor(elapsed/60) 
        if(elapsed%60<10)
        time="0"+i+":0"+elapsed%60
        else
        time="0"+i+":"+elapsed%60
    }
    else if(elapsed<6000)
    {   i=Math.floor(elapsed/60)
        if(elapsed%60<10)
        time=i+":0"+elapsed%60
        else
        time=i+":"+elapsed%60
    }
    return <h2>{time}</h2>;
  }
}