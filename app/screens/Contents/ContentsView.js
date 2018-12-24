import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Toolbar from '../../components/ToolBar/ToolBar';
import styles from './styles';
import PropTypes from 'prop-types';
import ListItem from '../../components/ListItem/ListItem';
import SearchBar from '../../components/SearchBar/SearchBar';
import LanguageSelection from '../../components/LanguageSelection/LanguageSelection';
import { Dialog } from 'react-native-material-ui';
import RadioGroup from 'react-native-radio-buttons-group';
import TabBar from '../../components/TabBar/TabBar';
import * as Utils from '../../lib/utils';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';
import DialogDisp from '../../components/Dialog/Dialog';

const radio_props = [
    {label: 'param1', value: 0 },
    {label: 'param2', value: 1 }
  ];

class ContentsView extends Component {
	state={
		currentPage: 1,
		searchKeyword: '',
		dialog: false,
		selectedItem: "Any"
	};

	static getDerivedStateFromProps(nextProps, state) {
		if(state.searchKeyword === '' && state.selectedItem === 'Any'){
			const data = nextProps.items;
			return {
				data
			};
		}
		return null;
		
	}

	render() {
		return (
			<View style={styles.container}>
				<Toolbar/>
				<TabBar/>
				<FlatList
					data={this.state.data}
					extraData={this.state.data}
					keyExtractor={this.keyExtractor}
					renderItem={this.renderItem}
					ItemSeparatorComponent={this.renderSeparator}
					ListHeaderComponent={this.renderHeader}
				/>
				{this.state.dialog && <DialogDisp languages= {this.props.languages} onPress={this.onPress} onClick={this.onClick}/>}
				{this.props.loading && <LoadingIndicator/>}
			</View>
		);
	}

	renderHeader = () => {
		return(
			<View>
				<SearchBar value={this.state.searchKeyword} onChangeText={this.onChangeText}/>
				<LanguageSelection onClick={this.onClick} selectedItem= {this.state.selectedItem}/>
			</View>
		);
	}

	onClick = (dialog) => {
		this.setState({dialog});
	}

	renderSeparator = () => {
		return(
			<View style={styles.seperator}/>
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
		const {items} = this.props;
		const data = Utils.searchFunction(text, items, 'full_name');
		this.setState({ data, searchKeyword: text });
	};

	onPress = (data) => {
		const selectedVal = data.filter(val=>{return val.selected});
		const selectedItem = selectedVal[0].label;
		const {items} = this.props;
		const dataItems = Utils.searchFunction(selectedItem, items, 'language');
		this.setState({dialog: false, selectedItem, data: dataItems, searchKeyword: '' });
	}
}

ContentsView.propTypes = {
	onLogin: PropTypes.func
};

export default ContentsView;
