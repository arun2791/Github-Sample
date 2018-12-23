import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { Toolbar } from 'react-native-material-ui';
import styles from './styles';
import PropTypes from 'prop-types';
import metrics from '../../config/metrics';
import Colors from '../../config/colors';
import ListItem from 'app/components/ListItem/ListItem';

class ContentsView extends Component {
	state = {
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
				<Toolbar
					leftElement= "menu"
					centerElement={
						<View style={{justifyContent: "center", alignItems: "center", marginRight: 30}}>
							<Icon name="logo-github" size={metrics.logo} color={Colors.COLOR_WHITE}/>
						</View>
					}
					rightElement={
						<View style={{justifyContent: "center", alignItems: "center", marginRight: 20}}>
							<Icon name="ios-notifications" size={metrics.notif} color={Colors.COLOR_WHITE}/>
						</View>
					}
				/>
				<FlatList
					data={this.state.data}
					extraData={this.state.data}
					keyExtractor={this.keyExtractor}
					renderItem={this.renderItem}
					onEndReachedThreshold={1}
                    onEndReached={this.onEndReached}
				/>
			</View>
		);
	}

	keyExtractor = (item, index) => {
		return index;
	};

	renderItem = ({ item, index }) => {
		const imageField = 'poster-image';
		return <ListItem item={item}  />;
	};

	onEndReached = () => {
		const { totalItems } = this.props;
		const { currentPage, data, searchKeyword } = this.state;
		if (totalItems > data.length && searchKeyword.length === 0) {
			this.props.requestContents(currentPage + 1);
			this.setState({ currentPage: currentPage + 1 });
		}
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
