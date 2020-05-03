import React, { Component } from 'react'
import fire from './firebase/firebase'
import FileUploader from 'react-firebase-file-uploader'
import { storage } from 'firebase'

 class Uploads extends Component {
    state={
        image:'',
        imageURL: '',
        progress:0
    }
    
    reDirect=(event)=>{
        event.preventDefault()
        window.location='/login'
    }

    handleUploadStart = ()=>{
        this.setState({
            progress:0
        })
    }

    handleUploadSuccess =(filename)=>{
        this.setState({
            image:filename,
            progress:100
        })

        fire.storage().ref('avatars').child(filename).getDownloadURL()
        .then(url=>this.setState({
            imageURL:url
        })
        )
    }

    handleProgress= progress =>{
        this.setState({progress:progress})
    }
 
    render() {
        console.log(this.state)
        return (
            <div>
           
                <button onClick={this.reDirect}>Dashboard</button>

                <div>
                <p>Uploading : {this.state.progress} %</p>
                <FileUploader
                
                accept="/*"
                name='image'
                storageRef={fire.storage().ref('avatars')}
                onUploadStart={this.handleUploadStart}
                onoUploadSuccess={this.handleUploadSuccess}
                onProgress={this.handleProgress}
                />
                </div>
            </div>
        )
    }
}

export default Uploads
