// Code YouTubeDebugger Component Here
import React, {Component} from 'react '
class YouTubeDebugger extends Comment{
    constructor(){
        super()
        this.state={
                errors: [],
                user: null,
                settings: {
                  bitrate: 8,
                  video: {
                    resolution: '1080p'
                  }
                }
              }
        
    }
    handleClick =()=>{
        this.setState(previousState => {
            return {
              settings: {...previousState.settings,bitrate:12}
            }
          })
    }
    handleClickRes =()=>{
        this.setState(previousState => {
            return {
              settings: {...previousState.settings, video:{
                resolution: "720p"}}
            }
          })
    }
    render(){
        return(
            <div> 
                <button className="bitrate" onClick={this.handleClick}> bitrate </button>
                <button className="resolution" onClick={this.handleClickRes}> bitrate </button>
            </div>
        )
    }
}
export default YouTubeDebugger