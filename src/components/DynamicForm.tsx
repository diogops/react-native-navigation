import React from 'react';
import { View, Button, TextInput, Checkbox, Text, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

const DynamicForm = ({ fields }) => {
    const { control, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Faça algo com os dados do formulário aqui
    };

    const renderField = (field) => {
        switch (field.type) {
            case 'text':
            case 'integer':
            case 'decimal':
                return (
                    <Controller
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                label={field.label}
                                value={value}
                                onChangeText={onChange}
                            />
                        )}
                        name={field.name}
                        defaultValue=""
                    />
                );
            case 'select':
                return (
                    <Controller
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                label={field.label}
                                value={value}
                                onChangeText={onChange}
                            />
                        )}
                        name={field.name}
                        defaultValue=""
                    />
                );
            case 'checkbox':
                return (
                    <Controller
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <Checkbox
                                status={value ? 'checked' : 'unchecked'}
                                onPress={() => onChange(!value)}
                                label={field.label}
                            />
                        )}
                        name={field.name}
                        defaultValue={false}
                    />
                );
            case 'date':
                return (
                    <Controller
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                label={field.label}
                                value={value}
                                onChangeText={onChange}
                                placeholder="YYYY-MM-DD"
                            />
                        )}
                        name={field.name}
                        defaultValue=""
                    />
                );
            default:
                return <Text>Unsupported field type</Text>;
        }
    };

    // return (
    //     <View >
    //         <Text>Teste de Tela</Text>
    //     </View>
    // );
    return (
        <View>
            {fields?.map((field, index) => (
                <View key={index}>
                    {/* {renderField(field)} */}
                </View>
            ))}
            <Button onPress={handleSubmit(onSubmit)} title="Submit" />
        </View>
    );
};

export default DynamicForm;

