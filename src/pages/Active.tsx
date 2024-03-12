import { View, Button, Alert } from "react-native"
import { useForm, Controller } from "react-hook-form"
import { Card, Text, TextInput, } from 'react-native-paper';
import MaskInput from 'react-native-mask-input';
import * as React from 'react';
import DynamicForm from '../components/DynamicForm';

const fields = [
    { name: 'name', label: 'Name', type: 'text' },
    { name: 'age', label: 'Age', type: 'integer' },
    { name: 'height', label: 'Height', type: 'decimal' },
    { name: 'email', label: 'Email', type: 'text' },
    {
        name: 'gender', label: 'Gender', type: 'select', options: [
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' },
        ]
    },
    { name: 'subscribe', label: 'Subscribe', type: 'checkbox' },
    { name: 'birthdate', label: 'Birthdate', type: 'date' },
];

export default function App() {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            phoneNumber: "",
        },
    })
    const onSubmit = (data) => console.log(data)


    return (
        <Card mode="contained">
            <Card.Content >
                <View style={{ gap: 10 }}>

                    <DynamicForm fields={fields} />
                    {/* <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                placeholder="First name"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                dense={false}
                                mode="outlined"
                                error={false}
                                selectionColor="black"
                            />
                        )}
                        name="firstName"
                    />
                    {errors.firstName && <Text>This is required.</Text>}


                    <Controller
                        control={control}
                        rules={{
                            maxLength: 100,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                placeholder="Last name"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                        name="lastName"
                    />

                    <Controller
                        control={control}
                        rules={{
                            maxLength: 100,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                placeholder="Phone number"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                dense={false}
                                mode="outlined"
                                error={false}
                                selectionColor="black"
                                render={props =>
                                    <MaskInput
                                        {...props}
                                        mask={['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]} />

                                }
                            />
                        )}
                        name="phoneNumber"
                    />


                    <Button title="Submit" onPress={handleSubmit(onSubmit)} /> */}
                </View>
            </Card.Content>
        </Card>

    )
}