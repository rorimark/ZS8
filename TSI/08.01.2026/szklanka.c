#include <stdio.h>

int main()
{
    long long h = 0;
    long long res = 0;
    
    scanf("%d", &h);
    
    if(h%2==0)
    {
        res = h/2;
    } else
    {
        res = h/2+1;
    }
    
    printf("%lld", res);
    
	return 0;
}
