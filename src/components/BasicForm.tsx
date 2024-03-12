import React from 'react';
import { useForm, Controller } from 'react-hook-form';
// import { TextField, Checkbox, Select, MenuItem, FormControl, InputLabel, Button } from '@mui/material';
import { Card, Text, TextInput, List, Checkbox } from 'react-native-paper';

const DynamicForm = ({ fields, onSubmit }) => {
    const { control, handleSubmit } = useForm();
    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);

    const renderField = (field) => {
        switch (field.type) {
            case 'text':
                return <Controller name={field.name} control={control} render={({ field }) =>
                    <TextInput placeholder={field.label} {...field} label={field.label} />} />;
            case 'select':
                return (
                    <Controller
                        name={field.name}
                        control={control}
                        render={({ field }) => (
                            <List.Section title={field?.name}>
                                <List.Accordion
                                    title={field?.label}
                                    expanded={expanded}
                                    onPress={handlePress}>
                                    {field?.options.map((option) => (
                                        <List.Item key={option.value} title={option.label} />
                                    ))}
                                </List.Accordion>
                            </List.Section>
                        )}
                    />
                );
            case 'checkbox':
                return <Controller name={field.name} control={control} render={({ field }) => <Checkbox {...field} status={field.value ? "checked" : "unchecked"} />} />;
            // case 'integer':
            // case 'decimal':
            //     return <Controller name={field.name} control={control} render={({ field }) =>
            //         <TextInput {...field} type="number" label={field.label} />} />;
            // case 'date':
            //     return <Controller name={field.name} control={control} render={({ field }) =>
            //         <TextField {...field} type="date" label={field.label} InputLabelProps={{ shrink: true }} fullWidth />} />;
            default:
                return null;
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {fields.map((field, index) => (
                <div key={index} style={{ marginBottom: '20px' }}>
                    {renderField(field)}
                </div>
            ))}
            {/* <Button type="submit" variant="contained">Submit</Button> */}
        </form>
    );
};

export default DynamicForm;