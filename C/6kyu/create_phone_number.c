/*
   Write a function that accepts an array of 10 integers (between 0 and 9),
   that returns a string of those numbers in the form of a phone number.

Example:
create_phone_number(phnum, (const unsigned char[]){1,2,3,4,5,6,7,8,9,0});
phnum <- "(123) 456-7890"

The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses!
*/

#include <stdio.h>

char    *place_signs(char phnum[15])
{
    phnum[0] = '(';
    phnum[4] = ')';
    phnum[5] = ' ';
    phnum[9] = '-';
    return (phnum);
}

char    *create_phone_number(char phnum[15], const unsigned char nums[10])
{
    int i;
    int j;

    place_signs(phnum);
    j = 0;
    i = 1;
    while (i < 4)
    {
        phnum[i] = nums[j] + '0';
        j++;
        i++;
    }
    i += 2;
    while (i < 9)
    {
        phnum[i] = nums[j] + '0';
        j++;
        i++;
    }
    i++;
    while (i < 14)
    {
        phnum[i] = nums[j] + '0';
        j++;
        i++;
    }
    phnum[i] = '\0';
    return (phnum);
}

int     main(void)
{
    char                phnum[15];
    const unsigned char nums[10] = {1, 1, 1, 1, 1, 1, 1, 1, 1, 1};

    create_phone_number(phnum, nums);
    printf("%s\n", phnum);
    return (0);
}
