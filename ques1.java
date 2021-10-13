
import java.util.*;

public class ques1 {
    public static void main(String[] args) {
        Scanner input=new Scanner(System.in);
        //Take 3 number as input
        System.out.println("Enter Three Numbers: ");
        int A=input.nextInt();
        int B=input.nextInt(); 
        int C =input.nextInt(); 
        
        //Comaparing them with each other, also considering the case when they are equal
        if(A>=B && A>=C)
        {
          System.out.println("Largest  Number Is: "+A);
        }
        else if(B>=C && B>=A)
        {
          System.out.println("Largest Number Is: "+B);
        }
        if(C>=A && C>=B)
        {
          System.out.println("Largest Number Is: "+C);
        }
        input.close();
       }
}
