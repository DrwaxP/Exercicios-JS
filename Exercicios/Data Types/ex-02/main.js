let estilo = ['Jazz', 'Blues'];
estilo.push('Rock-n-Roll')
console.log(estilo);
//Ex resolvido no terminal
/*
> estilo = ['Jazz','Blues'];
[ 'Jazz', 'Blues' ]
> estilo.push('Rock-N-Roll');
3
> estilo
[ 'Jazz', 'Blues', 'Rock-N-Roll' ]
> estilo.at(-2) = 'Classic';
Uncaught ReferenceError: Invalid left- in assignment
> estilo[1] = 'Classic';
'Classic'
> estilo
[ 'Jazz', 'Classic', 'Rock-N-Roll' ]
> estilo.shift();
'Jazz'
> estilo
[ 'Classic', 'Rock-N-Roll' ]
> estilo.unshift('Rap','Reggae');
4
> estilo
[ 'Rap', 'Reggae', 'Classic', 'Rock-N-
> 

*/