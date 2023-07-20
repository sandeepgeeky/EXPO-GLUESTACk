import {StatusBar} from 'expo-status-bar';
import {config} from './gluestack-ui.config';
import {GluestackUIProvider, Text, Heading, Button, Box} from './src/components';

export default function App() {
	return (
		<GluestackUIProvider config={config.theme}>
			<Box>
				<Heading>Hello World!</Heading>
				<Text>Hello World!</Text>
				<Button>Hello Button!</Button>
				<StatusBar style='auto' />
			</Box>
		</GluestackUIProvider>
	);
}
