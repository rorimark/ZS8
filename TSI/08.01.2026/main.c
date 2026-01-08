#include <stdio.h>

int main()
{
	int c = 0;
	int n = 0;

	int takie_same = 0;
	int rozne = 0;
	
	scanf("%d %d", &c, &n);
	if(c<n)
	{
		takie_same = c;
	} 
	else 
	{
		takie_same = n;
	}
	
	if(c>0)
	{
	    rozne = (c-n)/2;
	}
	else
	{
	    rozne = (n-c)/2;
	}
	
	for(int i = 1; i <= 4; i++)
	{
	    for(int j = 0; j < i; j++)
	    {
	        printf("%d", i);
	    }
	}

	
// 	printf("To jest liczba pierwsza - %d, a to jest druga - %d", c, n);
	printf("%d %d", takie_same, rozne);

	return 0;
}
