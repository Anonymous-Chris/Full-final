import React, { Component } from 'react'
import fire from './firebase/firebase'
import FileUploader from 'react-firebase-file-uploader'
import axios from './axios-order'
import Footer from './pages/Footer'
import { Button} from 'react-bootstrap'
import './assets/css/all.css'


 class Uploads extends Component {
constructor(props) {
    super(props)

    this.state = {
     
            image:'',
            imageURL: '',
            progress:0,
            csvData: []
        
    }
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

    handleUploadSuccess =filename=>{
        this.setState({
            image :filename,
            progress:100
        })

        fire.storage().ref('avatars').child(filename).getDownloadURL()
        .then((url)=>
        // console.log(url)
        this.setState({
            imageURL:url
        })
      
        )
       
    }

    handleProgress= progress =>{
        this.setState({progress:progress})
    }


componentDidMount(){
    axios.get('/alldata.json').then((res)=>{
        // console.log(res)
         const fetchedData = []
         for(let key in res.data){
             fetchedData.unshift({
                 ...res.data[key],
                 id:key
             })
         }
         this.setState({csvData:fetchedData})
         //console.log(this.state.csvData)
         
     })

 }

    getData(){
        //console.log(this.state.csvData)
        var todaysdate =(new Date().toLocaleDateString())
       // console.log(todaysdate)
        const todaysData= []

        for (let i in this.state.csvData){
       
            if(this.state.csvData[i].date===todaysdate){
                todaysData.unshift({
                  ...this.state.csvData[i]
                })
            }
        }
        this.setState({csvData: todaysData})
     //   console.log(this.state.csvData)
    }

    getData1(){
        console.log(this.state.csvData)
        var todaysdate =(new Date().toLocaleDateString())
        console.log(todaysdate)
        const todaysData= []

        for (let i in this.state.csvData){
       
            if(this.state.csvData[i].date===todaysdate){
                todaysData.unshift({
                  ...this.state.csvData[i]
                })
            }
        }
        this.setState({csvData: todaysData})
        console.log(this.state.csvData)
        this.exportCSV()
    }



    getDataWeekly(){
        var today = new Date().toLocaleDateString()
        console.log(today + 'after')
        var old = new Date();
        old.setDate(old.getDate()-7);
        var before=(old.toLocaleDateString())
        console.log(before + 'before')

        console.log(before>today)
 
       
            var weeklyData=[]
        for (let i in this.state.csvData){
            // console.log(this.state.csvData[i].date + '   data from db')
            // console.log(before + '  old')
            // console.log(today + '   today')

            // console.log(before<=this.state.csvData[i].date)
            // console.log(today>this.state.csvData[i].date)
            if(this.state.csvData[i].date>=before || this.state.csvData[i].date<today){
                weeklyData.unshift({
                  ...this.state.csvData[i]
                })
            }
        }
        this.setState({csvData: weeklyData})
        console.log(this.state.csvData)

    }

    getDataWeekly1(){
        var today = new Date().toLocaleDateString()
        console.log(today + 'after')
        var old = new Date();
        old.setDate(old.getDate()-7);
        var before=(old.toLocaleDateString())
        console.log(before + 'before')

        console.log(before>today)
 
       
            var weeklyData=[]
        for (let i in this.state.csvData){
            // console.log(this.state.csvData[i].date + '   data from db')
            // console.log(before + '  old')
            // console.log(today + '   today')

            // console.log(before<=this.state.csvData[i].date)
            // console.log(today>this.state.csvData[i].date)
            if(this.state.csvData[i].date>=before || this.state.csvData[i].date<today){
                weeklyData.unshift({
                  ...this.state.csvData[i]
                })
            }
        }
        this.setState({csvData: weeklyData})
        console.log(this.state.csvData)
        this.exportCSV()

    }



    getDataMonthly(){
        var today = new Date().toLocaleDateString()
        console.log(today + 'after')
        var old = new Date();
        old.setDate(old.getDate()-30);
        var before=(old.toLocaleDateString())
   
       
            var monthlyData=[]
        for (let i in this.state.csvData){
            
            if(this.state.csvData[i].date>=before || this.state.csvData[i].date<today){
                monthlyData.unshift({
                  ...this.state.csvData[i]
                })
            }
        }
        this.setState({csvData: monthlyData})
        console.log(this.state.csvData)



    }

    
    getDataMonthly1(){
        var today = new Date().toLocaleDateString()
        console.log(today + 'after')
        var old = new Date();
        old.setDate(old.getDate()-30);
        var before=(old.toLocaleDateString())
   
       
            var monthlyData=[]
        for (let i in this.state.csvData){
            
            if(this.state.csvData[i].date>=before || this.state.csvData[i].date<today){
                monthlyData.unshift({
                  ...this.state.csvData[i]
                })
            }
        }
        this.setState({csvData: monthlyData})
        console.log(this.state.csvData)
        this.exportCSV()
    }


    
    exportCSV(){

        var csvRow=[]
        var A =[['id','Name', 'Student Id', 'Course Id', 'Hours Spent', 'Date']];
        var re=this.state.csvData;
        var count115,count120,count121, count123,count125,count262,count263,count264,count267,count268, countExtra
        count115=count120=count121=count123=count125=count262=count263=count264=count267=count268=countExtra = 0
        var count261=0

               for (var item=0; item<re.length;item++){
            if((re[item].courseId).includes('115')){
                count115 +=re[item].hoursSpent
            }else  if((re[item].courseId).includes('120')){
                count120 +=re[item].hoursSpent
            }else  if((re[item].courseId).includes('121')){
                count121 +=re[item].hoursSpent
            }else  if((re[item].courseId).includes('123')){
                count123 +=re[item].hoursSpent
            }else  if((re[item].courseId).includes('125')){
                count125 +=re[item].hoursSpent
            }else  if((re[item].courseId).includes('261')){
                count261 +=re[item].hoursSpent
            }else  if((re[item].courseId).includes('262')){
                count262 +=re[item].hoursSpent
            }else  if((re[item].courseId).includes('263')){
                count263 +=re[item].hoursSpent
            }else  if((re[item].courseId).includes('264')){
                count264 +=re[item].hoursSpent
            }else  if((re[item].courseId).includes('267')){
                count267 +=re[item].hoursSpent
            }else  if((re[item].courseId).includes('268')){
                count268 +=re[item].hoursSpent
            }else{
                countExtra += re[item].hoursSpent
            }
            console.log(count125)
        }

        for (var item=0; item<re.length;item++){
            A.push([item,re[item].name,re[item].userId,re[item].courseId,re[item].hoursSpent,re[item].date]);
        }
        A.push(['','','','','',''])
        A.push(['Total:', 'Math 115:',` ${count115}`])   
        A.push(['','Math 120:', `${count120}`])
        A.push(['', 'Math 121: ' , `${count121}` ])
        A.push(['','Math 123:'  , ` ${count123}` ])
        A.push(['',  'Math 125:',  ` ${count125}`])
        A.push(['', 'Math 261:' ,  ` ${count261}`])
        A.push(['', 'Math 262:' , ` ${count262}` ])
        A.push(['', 'Math 263:' , ` ${count263}` ])
        A.push(['', 'Math 264: ' , `${count264}` ])
        A.push(['', 'Math 267: ' ,  `${count267}`])
        A.push(['', 'Math 267:' ,  ` ${count268}`])
        A.push(['', 'Extra:' ,  ` ${countExtra}` ])

      

        
        for (var i=0; i<A.length;++i){
            csvRow.push(A[i].join(","))
        }
        var csvString = csvRow.join("%0A")
        var a =document.createElement("a")
        a.href='data:attachment/csv,' + csvString;
        a.target="_Blank"
        a.download="testfile.csv"
        document.body.appendChild(a);
        a.click()
        window.location.reload(false)
        console.log(csvRow)
    }

    exportByHours(){
        var csvRow=[]
        var A =[]
        var re = this.state.csvData
        var count115,count120,count121, count123,count125,count262,count263,count264,count267,count268, countExtra
        count115=count120=count121=count123=count125=count262=count263=count264=count267=count268=countExtra = 0
        var count261=0
        console.log(re)

        for (var item=0; item<re.length;item++){
            if((re[item].courseId).includes('115')){
                count115 +=re[item].hoursSpent
            }else  if((re[item].courseId).includes('120')){
                count120 +=re[item].hoursSpent
            }else  if((re[item].courseId).includes('121')){
                count121 +=re[item].hoursSpent
            }else  if((re[item].courseId).includes('123')){
                count123 +=re[item].hoursSpent
            }else  if((re[item].courseId).includes('125')){
                count125 +=re[item].hoursSpent
            }else  if((re[item].courseId).includes('261')){
                count261 +=re[item].hoursSpent
            }else  if((re[item].courseId).includes('262')){
                count262 +=re[item].hoursSpent
            }else  if((re[item].courseId).includes('263')){
                count263 +=re[item].hoursSpent
            }else  if((re[item].courseId).includes('264')){
                count264 +=re[item].hoursSpent
            }else  if((re[item].courseId).includes('267')){
                count267 +=re[item].hoursSpent
            }else  if((re[item].courseId).includes('268')){
                count268 +=re[item].hoursSpent
            }else{
                countExtra += re[item].hoursSpent
            }
            console.log(count125)
        }
        
        A.push(['Total hours spent in each course'])
        A.push(['','','','','',''])
        A.push(['Total:', 'Math 115:',` ${count115}`])   
        A.push(['','Math 120:', `${count120}`])
        A.push(['', 'Math 121: ' , `${count121}` ])
        A.push(['','Math 123:'  , ` ${count123}` ])
        A.push(['',  'Math 125:',  ` ${count125}`])
        A.push(['', 'Math 261:' ,  ` ${count261}`])
        A.push(['', 'Math 262:' , ` ${count262}` ])
        A.push(['', 'Math 263:' , ` ${count263}` ])
        A.push(['', 'Math 264: ' , `${count264}` ])
        A.push(['', 'Math 267: ' ,  `${count267}`])
        A.push(['', 'Math 267:' ,  ` ${count268}`])
        A.push(['', 'Extra:' ,  ` ${countExtra}` ])
            
        
        

        for (var i=0; i<A.length;++i){
            csvRow.push(A[i].join(","))
        }
        var csvString = csvRow.join("%0A")
        var a =document.createElement("a")
        a.href='data:attachment/csv,' + csvString;
        a.target="_Blank"
        a.download="hours.csv"
        document.body.appendChild(a);
        a.click()
        window.location.reload(false)
        console.log(csvRow)

    }
    

    render() {
       // console.log(this.state)
        return (
            <div>
            <div style={{margin:'25px'}}>
      
            </div>
            <div className='container'>
           
                <Button onClick={this.reDirect} className="myBtn" bstyle="primary" >Go To Dashboard</Button>
                <br/>
                <br/>
                <div>
                <h1>Upload Schedule</h1>
                <p>Uploading Scledule: {this.state.progress} % . (The filename should be <b>schedule.pdf</b> exactly)</p>
                
                
                <FileUploader
                
                accept="/*"
                name='image'
                storageRef={fire.storage().ref('avatars')}
                onUploadStart={this.handleUploadStart}
                onoUploadSuccess={this.handleUploadSuccess}
                onProgress={this.handleProgress}
                />
                </div>
                <br/>

               
                <div>
                <h1>Downloads</h1>
                <table>
                <tr>
                <td>
                
                <h3><b>1. Daily</b></h3>
                <Button className="myBtn" bstyle="primary" onClick={()=>this.getData()}>Get Data </Button>
                <br/>
                <Button className="myBtn" bstyle="primary" onClick={()=>this.getData1()}>Download</Button>
                <div>
           
                </div>

                </td>
                <br/>
                <br/>
                
                <td>
                <h3><b>2. Weekly</b></h3>
                <Button className="myBtn" bstyle="primary" onClick={()=>this.getDataWeekly()}>Get Data</Button>
                <br/>
                <Button className="myBtn" bstyle="primary" onClick={()=>this.getDataWeekly1()}>Download</Button>
                <br/>
               
                </td>
                <br/>
                <br/>
                <br/>
                <td>
                <h3><b>3. Monthly</b></h3>
                <Button className="myBtn" bstyle="primary" onClick={()=>this.getDataMonthly()}>Get Data</Button>
                <br/>
                <Button className="myBtn" bstyle="primary" onClick={()=>this.getDataMonthly1()}>Download</Button>
                <br/>
            
                </td>
                </tr>
                </table>
                </div>
                <br/>
                <div className="shifting">
                <p><b>Get Data by total number of hours spent on each course(All time)</b></p>
                <Button onClick={()=>this.exportByHours()}>Download</Button>
                </div>
            </div>
            <div>
            <br/>
            <div style={{margin:'25px'}}></div>
            <Footer></Footer>
            </div>
            </div>
        )
    }
}

export default Uploads
