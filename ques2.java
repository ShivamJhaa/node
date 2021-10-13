import java.util.*;

public class ques2 {
    public static void main(String[] args) {
        Scanner input=new Scanner(System.in);
        System.out.println("Enter the Number");
        int N=input.nextInt();

        int A=0,SUM=0;

        //No divisible by 2,3 both is also divisible by 6
        while(A<=N){
            if(A%6==0){
              SUM+=A;
            }
            A++;
        }

        System.out.println("Sum = "+SUM);
        input.close();
        }
}
