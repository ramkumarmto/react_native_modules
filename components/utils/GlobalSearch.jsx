import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { TextInput } from 'react-native-paper';
import { DataTable } from 'react-native-paper';


export class GlobalSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mapData: [], // this is the common array based on filter if not filtered then original array otherwise filteredArray
            data: [
                { firstName: "aaaaa", status: "Pending", visits: 155 },
                { firstName: "aabFaa", status: "Pending", visits: 155 },
                { firstName: "adaAAaaa", status: "Approved", visits: 1785 },
                { firstName: "aAaaaa", status: "Approved", visits: 175 },
                { firstName: "adaSaaa", status: "Cancelled", visits: 165 },
                { firstName: "aasaaa", status: "Cancelled", visits: 157 },
                { firstName: "aweaaaaaewea", status: "Approved", visits: 153 },
                { firstName: "aaaaaa", status: "Submitted", visits: 155 }
            ],
            searchInput: "",
        }
    }

    inputChangeHandler = (event) => {
        this.setState({ searchInput: event }, () => {
                this.globalSearch()
            }
        )
    }

    componentDidMount = ()=> {
        this.setState({mapData: this.state.data});
    }

    globalSearch = () => {
        const { data, searchInput } = this.state;
        if (searchInput) {
            let filteredArr = data?.filter(value => {
                return (
                    value.firstName.toLowerCase().includes(searchInput.toLowerCase()) ||
                    value.status.toLowerCase().includes(searchInput.toLowerCase()) ||
                    value.visits
                        .toString()
                        .toLowerCase()
                        .includes(searchInput.toLowerCase())
                );
            });
            this.setState({mapData: filteredArr});
        }else {
            this.setState({mapData: data});
        }

    }


    render() {
        console.log("res", this.state.data.length, this.state.searchInput, this.state.mapData.length);
        const {mapData} = this.state;
        return (
            <>
                <View>
                    <Text>GlobalSearch</Text>
                    <TextInput placeholder='Search here..' onChangeText={this.inputChangeHandler} />
                </View>
                {
                    mapData.map((ele, index) => (
                        <DataTable.Row key={index}>
                            <DataTable.Cell numeric>{ele.firstName}</DataTable.Cell>
                            <DataTable.Cell numeric>{ele.status}</DataTable.Cell>
                            <DataTable.Cell numeric>{ele.visits}</DataTable.Cell>
                        </DataTable.Row>
                    ))
                }
                <DataTable.Row>
                    <DataTable.Cell numeric>1</DataTable.Cell>
                    <DataTable.Cell numeric>2</DataTable.Cell>
                    <DataTable.Cell numeric>3</DataTable.Cell>
                    <DataTable.Cell numeric>4</DataTable.Cell>
                </DataTable.Row>
            </>

        )
    }
}

export default GlobalSearch;




// import { View, Text } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { DataTable, TextInput } from 'react-native-paper';

// const DUMMY_DATA = [
//     { firstName: "aaaaa", status: "Pending", visits: 155 },
//     { firstName: "aabFaa", status: "Pending", visits: 155 },
//     { firstName: "adaAAaaa", status: "Approved", visits: 1785 },
//     { firstName: "aAaaaa", status: "Approved", visits: 175 },
//     { firstName: "adaSaaa", status: "Cancelled", visits: 165 },
//     { firstName: "aasaaa", status: "Cancelled", visits: 157 },
//     { firstName: "aweaaaaaewea", status: "Approved", visits: 153 },
//     { firstName: "aaaaaa", status: "Submitted", visits: 155 }
// ]

// const GlobalSearch = () => {
//     const [data, setData] = useState(DUMMY_DATA);
//     const [enteredText, setEnteredText] = useState('');
//     const [ filterdItem, setFilteredItem] = useState([])


//     const inputChangeHandler = (event) => {
//         // console.log("event", event)
//         setEnteredText(event)
//     }

//     useEffect(()=>{
//         if(enteredText){
//             const filteredData = data.filter((value, index) => {
//                 return (
//                     value.firstName.toLowerCase().includes(enteredText.toLowerCase()) ||
//                   value.status.toLowerCase().includes(enteredText.toLowerCase()) 
//                 )
//             })
//             setFilteredItem(filteredData)
//           }

//     },[enteredText])

//     const mappingArray = filterdItem.length === 0 ? data : filterdItem;

//     // console.log("result",enteredText, data.length, filterdItem.length)
//     return (
//         <>
//             <View>                    
//                  <Text>GlobalSearch</Text>
//                 <TextInput placeholder='Search here..' onChangeText={inputChangeHandler} />
//             </View>
//             {
//                 mappingArray?.map((ele, index) => (
//                     <DataTable.Row key={index}>
//                         <DataTable.Cell numeric>{ele.firstName}</DataTable.Cell>
//                         <DataTable.Cell numeric>{ele.status}</DataTable.Cell>
//                         <DataTable.Cell numeric>{ele.visits}</DataTable.Cell>
//                     </DataTable.Row>
//                 ))
//             }
//             <DataTable.Row>
//                 <DataTable.Cell numeric>1</DataTable.Cell>
//                 <DataTable.Cell numeric>2</DataTable.Cell>
//                 <DataTable.Cell numeric>3</DataTable.Cell>
//                 <DataTable.Cell numeric>4</DataTable.Cell>
//             </DataTable.Row>
//         </>

//     )
// }

// export default GlobalSearch