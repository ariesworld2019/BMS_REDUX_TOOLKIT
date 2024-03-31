import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';


// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#C0C0C0'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});


const Generate_PDF = () => ( 
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text>Heading #1</Text>
            </View>
            <View style={styles.section}>
                <Text>Heading #2</Text>
            </View>
        </Page>
    </Document>
);
export default Generate_PDF;
