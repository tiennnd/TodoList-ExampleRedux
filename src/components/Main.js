import React, {Component} from 'react'
import {
    View,
    Text,
    Button,
    StyleSheet, TextInput, FlatList
} from 'react-native'
import {connect} from "react-redux";
import {toggleTodo, addTodo} from "../actions";

class Main extends Component {

    constructor() {
        super();
        this.state = {
            dataSource: [],
            text: ''
        };
    }


    componentWillReceiveProps(nextProps) {
        console.log(JSON.stringify(nextProps));
        this.setState({dataSource: nextProps.todos})
    }

    actionAddTodo(text) {
        this.props.addTodo(text);
    }

    actionToggle(id) {
        this.props.toggleTodo(id)
    }

    isCompleted = (todo) => {
        return todo.completed === true;
    }


    renderRow = ({item}) => {
        return (item.completed) ?
        (
            <Text
                style={{color:'green'}}
                onPress={() => {
                    this.actionToggle(item.id);
                }}>
                {item.text} - Completed
            </Text>
        ) : (
            <Text
                style={{color:'red'}}
                onPress={() => {
                    this.actionToggle(item.id);
                }}>
                {item.text} - Uncomplete
            </Text>
        )

    }

    render() {
        return (
            <View style={styles.container}>
                <Text>TODO LIST</Text>
                <TextInput
                    onChangeText={(text) => {
                        this.setState({text: text})
                    }}
                    placeholder={'type here'}
                    style={styles.textInput}
                />
                <View
                    style={styles.layout_button}
                >

                    <Button
                        title={'Show All'}
                        onPress={() => {
                            this.setState({dataSource: this.props.todos})
                        }}
                    />
                    <Button
                        color={'red'}
                        title={'Add'}
                        onPress={() => {
                            this.actionAddTodo(this.state.text)
                        }}
                    />
                    <Button
                        title={'Completed'}
                        onPress={() => {
                            this.setState({dataSource: this.props.todos.filter(this.isCompleted)})
                        }}
                    />
                </View>

                <Text>Count = {this.props.todos.length}</Text>

                <View style={styles.line}/>

                <Text style={{marginBottom:50, color:'grey', fontStyle:'italic'}}> Click to item</Text>
                <View>

                    <FlatList
                        data={this.state.dataSource}
                        renderItem={this.renderRow}
                    />
                </View>

            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTodo: (text) => dispatch(addTodo(text)),
        toggleTodo: id => dispatch(toggleTodo(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)


const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        flex: 1,
        alignItems: "center",
    },
    textInput: {
        height: 40,
        width: 200,
        borderWidth: 1,
        textAlign: 'center',
        margin:10
    },
    layout_button: {
        margin: 10,
        height: 40,
        width: 300,
        flexDirection: 'row',
        backgroundColor: '#DDD',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 10
    },
    line: {
        backgroundColor: '#DDD',
        height: 1,
        width: 300,
        marginBottom: 10
    }
})