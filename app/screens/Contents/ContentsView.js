import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Toolbar from '../../components/ToolBar/ToolBar';
import styles from './styles';
import PropTypes from 'prop-types';
import ListItem from '../../components/ListItem/ListItem';
import SearchBar from '../../components/SearchBar/SearchBar';

class ContentsView extends Component {
	state={
		currentPage: 1,
		searchKeyword: ''
	};

	static getDerivedStateFromProps(nextProps, state) {
		const data = state.searchKeyword.length > 0 ? nextProps.searchedItems : nextProps.items;
		return {
			data
		};
	}

	render() {
		return (
			<View style={styles.container}>
				<Toolbar/>
				<SearchBar onChangeText={this.onChangeText}/>
				<FlatList
					data={this.state.data}
					extraData={this.state.data}
					keyExtractor={this.keyExtractor}
					renderItem={this.renderItem}
				/>
			</View>
		);
	}

	keyExtractor = (item, index) => {
		return index;
	};

	renderItem = ({ item, index }) => {
		return <ListItem item={item}  />;
	};

	onChangeText = text => {
		if (!text) {
			text = '';
		}
		this.setState({ searchKeyword: text.toLowerCase() });
		this.props.search(text.toLowerCase());
	};
}

ContentsView.propTypes = {
	onLogin: PropTypes.func
};

export default ContentsView;
