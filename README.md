Custom component for multi-select in react-simple-chatbot

How to use:


```javascript
const options = [
	{
		value: 1,
		label: 'Option 1',
	},
	{
		value: 2,
		label: 'Option 2',
	},
	{
		value: 3,
		label: 'Option 3',
	},
	{
		value: 4,
		label: 'Option 4',
	}
]

{
    id: body.id,
    component: (
      <MultiSelect
        trigger='goto'
        options=options
      />
    ),
    hideInput: true,
}
