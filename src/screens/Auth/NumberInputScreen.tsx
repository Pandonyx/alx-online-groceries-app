import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function NumberInputScreen() {
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
									{/* Mesh Gradient */}
									<View style={styles.gradientMesh}>
											<Image source={require('@images/mesh.png')} style={styles.meshImage} />
										{/* Back Chevron */}
										<TouchableOpacity style={styles.backChevron} onPress={() => navigation.goBack()}>
											<FontAwesome name="chevron-left" size={24} color="#333" />
										</TouchableOpacity>
										{/* Title & Subtitle */}
										<Text style={styles.title}>Enter your number</Text>
										<Text style={styles.subtitle}>Phone number</Text>
									</View>

			{/* Country Selector & Input */}
			<View style={styles.inputRow}>
				<TouchableOpacity style={styles.countrySelector}>
						<Image source={require('@icons/ma.png')} style={styles.flag} />
					<Text style={styles.countryCode}>+212</Text>
					<FontAwesome name="chevron-down" size={16} color="#888" style={{ marginLeft: 4 }} />
				</TouchableOpacity>
				<TextInput
					style={styles.input}
					placeholder="Enter phone number"
					keyboardType="number-pad"
					placeholderTextColor="#bbb"
				/>
			</View>

			{/* Spacer */}
			<View style={styles.spacer} />

			{/* Green Button */}
			<TouchableOpacity style={styles.button}>
				<FontAwesome name="chevron-right" size={24} color="#fff" />
			</TouchableOpacity>

			{/* Home Indicator */}
			<View style={styles.homeIndicator} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
		gradientMesh: {
			width: '100%',
			height: 220,
			borderBottomLeftRadius: 32,
			borderBottomRightRadius: 32,
			paddingTop: 48,
			paddingHorizontal: 24,
			alignItems: 'flex-start',
			justifyContent: 'flex-end',
			backgroundColor: '#fff',
			overflow: 'hidden',
		},
				meshImage: {
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					resizeMode: 'cover',
					zIndex: 0,
				},
		backChevron: {
			position: 'absolute',
			top: 56,
			left: 24,
			zIndex: 2,
			backgroundColor: 'rgba(255,255,255,0.7)',
			borderRadius: 20,
			paddingVertical: 10,
			paddingHorizontal: 14,
		},
	title: {
		fontFamily: 'Gilroy-Bold',
		fontSize: 24,
		color: '#333',
		marginTop: 48,
	},
	subtitle: {
		fontFamily: 'Gilroy-Medium',
		fontSize: 16,
		color: '#666',
		marginTop: 8,
		marginBottom: 16,
	},
	inputRow: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 32,
		marginHorizontal: 24,
		width: '88%',
	},
	countrySelector: {
		flexDirection: 'row',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: '#eee',
		borderRadius: 12,
		paddingHorizontal: 10,
		paddingVertical: 8,
		marginRight: 8,
		backgroundColor: '#fafafa',
	},
	flag: {
		width: 24,
		height: 16,
		borderRadius: 3,
		marginRight: 6,
	},
	countryCode: {
		fontFamily: 'Gilroy-Medium',
		fontSize: 16,
		color: '#333',
		marginRight: 2,
	},
	input: {
		flex: 1,
		height: 48,
		borderWidth: 1,
		borderColor: '#eee',
		borderRadius: 12,
		paddingHorizontal: 16,
		fontFamily: 'Gilroy-Medium',
		fontSize: 16,
		backgroundColor: '#fafafa',
		color: '#333',
	},
	spacer: {
		flex: 1,
	},
	button: {
		width: 64,
		height: 64,
		borderRadius: 32,
		backgroundColor: '#27ae60',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 32,
		shadowColor: '#27ae60',
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.2,
		shadowRadius: 8,
		elevation: 4,
	},
	homeIndicator: {
		width: 120,
		height: 6,
		borderRadius: 3,
		backgroundColor: '#eee',
		alignSelf: 'center',
		marginBottom: 16,
	},
});

