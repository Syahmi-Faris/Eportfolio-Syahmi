#include<iostream>
#include<string>
#include<iomanip>
using namespace std;

const string MOVIE_LIST[5] = {"Kung Fu Panda 4", "Godzilla X Kong", "Despicable Me 4", "Avengers Secret Wars", "Spooderman Not at Home" };
const string SNACK_LIST[5] = {"Regular Popcorn", "Larger Popcorn", "Soda" ,"Mineral Water", "Hotdog"};
const string SHOWTIME_1[5] = {"1200", "1400", "2230", "1345", "1800"};
const string SHOWTIME_2[5] = {"1315", "1620", "0100", "1500", "2015"};
const char HALL_1[5] = {'A', 'C', 'B', 'H', 'E'};
const char HALL_2[5] = {'M', 'N', 'N', 'N', 'N'};
const int SNACK_PRICE[5] = {7, 10, 5, 2, 6};

class Cinema {
protected:
    //attributes
    string username;
    string email;
    string password;
    string selectedSeat;

    int selectedMovie;
    int selectedShowtime;
    int selectedHall;
    int selectedSnack[10];
    int snackquan[10];
    int snackIndex[10];

public:
    //constructor
    Cinema();

    //accessor and mutator
    void setUsername(string setUsername);
    string getUsername();

    void setEmail(string setEmail);
    string getEmail();

    void setPassword(string setPassword);
    string getPassword();

    void setSelectedMovie(int setSelectedMovie);
    int getSelectedMovie();

    void setSelectedSeat(string setSelectedSeat);
    string getSelectedSeat();

    void setSelectedSnacks(int setSelectedSnack[], int numItems);
    void setSelectedShowtime(int setSelectedShowtime);
    int getSelectedShowtime();

    void setSelectedHall(int setSelectedHall);
    int getSelectedHall();

    //methods
    virtual void generateDetailedReceipt(int snackCount) = 0;
    virtual void movieBooking() = 0;
    virtual void seatSelection() = 0;
    virtual void receipt() = 0;
    virtual void loginPage() = 0;
    virtual int snackSelection() = 0;
};

Cinema::Cinema() {
    username = "";
    email = "";
    password = "";
    selectedMovie = 0;
    selectedShowtime = 0;
    selectedSeat = "";
}

void Cinema::setUsername(string setUsername) { username = setUsername; }
string Cinema::getUsername() { return username; }

void Cinema::setEmail(string setEmail) { email = setEmail; }
string Cinema::getEmail() { return email; }

void Cinema::setPassword(string setPassword) { password = setPassword; }
string Cinema::getPassword() { return password; }

void Cinema::setSelectedMovie(int setSelectedMovie) { selectedMovie = setSelectedMovie; }
int Cinema::getSelectedMovie() { return selectedMovie; }

void Cinema::setSelectedSeat(string setSelectedSeat) { selectedSeat = setSelectedSeat; }
string Cinema::getSelectedSeat() { return selectedSeat; }

void Cinema::setSelectedSnacks(int setSelectedSnack[], int numItems) {
    for (int i = 0; i < numItems; i++) {
        selectedSnack[i] = setSelectedSnack[i];
    }
}

void Cinema::setSelectedShowtime(int setSelectedShowtime) { selectedShowtime = setSelectedShowtime; }
int Cinema::getSelectedShowtime() { return selectedShowtime; }

void Cinema::setSelectedHall(int setSelectedHall) { selectedHall = setSelectedHall; }
int Cinema::getSelectedHall() { return selectedHall; }

class Customer : public Cinema {
public:
    void generateDetailedReceipt(int snackCount) override;
    void movieBooking() override;
    void seatSelection() override;
    void receipt() override;
    void loginPage() override;
    int snackSelection() override;
};

void Customer::generateDetailedReceipt(int snackCount) {
    int snacktotal = 0;

    cout << endl;
    cout << "``````````````" << endl;
    cout << "                          CINEMA TICKETING SYSTEM : DETAILED RECEIPT" << endl << endl;
    cout << "``````````````" << endl;

    cout << endl << endl;

    cout << "Username : " << getUsername() << endl;
    cout << "Email : " << getEmail() << endl;
    cout << "Movie Booked : " << MOVIE_LIST[getSelectedMovie() - 1] << endl;
    cout << "Seat selection : " << getSelectedSeat() << endl;
    if (getSelectedHall() == 1)
        cout << "Venue : " << HALL_1[getSelectedMovie() - 1] << " hall" << endl;
    else
        cout << "Venue : " << HALL_2[getSelectedMovie() - 1] << " hall" << endl;
    if (getSelectedShowtime() == 1)
        cout << "Showtime : " << SHOWTIME_1[getSelectedMovie() - 1] << endl;
    else
        cout << "Showtime : " << SHOWTIME_2[getSelectedMovie() - 1] << endl;

    cout << endl << "Food and Beverages : " << endl;
    cout << "Items                  Quantity              Price(RM)" << endl;

    for (int i = 0; i < snackCount; i++) {
        cout << left << setw(22) << SNACK_LIST[selectedSnack[i] - 1] << setw(22) << snackquan[i] << snackquan[i] * SNACK_PRICE[selectedSnack[i] - 1] << endl;
        snacktotal += (snackquan[i] * SNACK_PRICE[selectedSnack[i] - 1]);
    }
    cout << endl << endl;
    cout << "Total payment : RM " << snacktotal + 15 << endl;
    cout << "The receipt will be send to you via your email " << email << endl;
    cout << "Thanks for your purchase. Enjoy your movie!" << endl;
}

void Customer::movieBooking() {

    cout << "``````````````" << endl;
    cout << "                          CINEMA TICKETING SYSTEM : MOVIE BOOKING" << endl << endl;
    cout << "``````````````" << endl;
    cout << endl << endl;

    cout << "MOVIE LIST :                         SHOWTIME 1           SHOWTIME 2             HALL(NORMAL)           HALL(BIG)" << endl << endl;
    cout << "[1] Kung Fu Panda 4 " << setw(23) << "1200" << setw(22) << "1315" << setw(22) << "A" << setw(22) << "M" <<  endl;
    cout << "[2] Godzilla X Kong " << setw(23) << "1400" << setw(22) << "1620" << setw(22) << "C" << setw(22) << "N"  << endl;
    cout << "[3] Despicable Me 3" << setw(24) << " 2230" << setw(22) << "0100" << setw(22) << "B" << setw(22) << "N"  << endl;
    cout << "[4] Avengers Secret Wars" << setw(19) << "1345" << setw(22) << "1500" << setw(22) << "H" << setw(22) << "N"  << endl;  
    cout << "[4] Spooderman Not at Home" << setw(17) << "1800" << setw(22) << "2015" << setw(22) << "E" << setw(22) << "N"  << endl;
    cout << "(note): price for normal ticket is RM15 per person and RM 18 for BIG Cinema" << endl;  

    cout << endl << endl;

    cout << "Please choose your movies[1, 2, 3 ......] : ";
    cin >> selectedMovie;
    cout << "Please choose your desired showtime[1/2] :";
    cin >> selectedShowtime;
    cout << "Please choose the hall[1/2] : ";
    cin >> selectedHall;
}

void Customer::seatSelection() {

    cout << "``````````````" << endl;
    cout << "                          CINEMA TICKETING SYSTEM : SEAT SELECTION" << endl << endl;
    cout << "``````````````" << endl;
    cout << endl << endl;

    for (char seatidInit = 'A'; seatidInit <= 'G'; seatidInit++) {
        for (int j = 1; j <= 5; j++) {
            cout << "[" << seatidInit << ",  " << j << "]   ";
        }
        cout << endl << endl;
    }

    cout << endl << endl;
    cout << "Choose your seat[A1, A2, A3, .....] : ";
    cin >> selectedSeat;
}

void Customer::receipt() {

    cout << "``````````````" << endl;
    cout << "                          CINEMA TICKETING SYSTEM : RECEIPT" << endl << endl;
    cout << "``````````````" << endl;
    cout << endl << endl;


    cout << "Username : " << getUsername() << endl;
    cout << "Movie Booked : " << MOVIE_LIST[getSelectedMovie() - 1] << endl;
    cout << "Seat selection : " << getSelectedSeat() << endl;
    if (getSelectedHall() == 1)
        cout << "Venue : " << HALL_1[getSelectedMovie() - 1] << " hall" << endl;
    else
        cout << "Venue : " << HALL_2[getSelectedMovie() - 1] << " hall" << endl;
    if (getSelectedShowtime() == 1)
        cout << "Showtime : " << SHOWTIME_1[getSelectedMovie() - 1] << endl;
    else
        cout << "Showtime : " << SHOWTIME_2[getSelectedMovie() - 1] << endl;
}

void Customer::loginPage() {
    int emailchecker;
    cout << endl;
    cout << "``````````````" << endl;
    cout << "                          CINEMA TICKETING SYSTEM : LOGIN" << endl << endl;
    cout << "``````````````" << endl;

    cin.ignore();
    cout << "Please enter your username : ";
    getline(cin, username);

    do {
        cout << "Email(e.g someone@gmail.com): ";
        cin >> email;
        emailchecker = email.find("@");
        if (emailchecker == -1)
            cout << "Invalid email" << endl;
    } while (emailchecker == -1);
    cout << "Password : ";
    cin >> password;
}

int Customer::snackSelection() {

    int i = 0, n = 0;
    char option = 'Y';
    cout << "``````````````" << endl;
    cout << "                          CINEMA TICKETING SYSTEM : SNACKS SELECTION" << endl << endl;
    cout << "``````````````" << endl;
    cout << endl << endl;
    cout << "SNACKS LIST :            PRICE(RM) : " << endl << endl;
    cout << "[1] Regular Popcorn      7.00" << endl;
    cout << "[2] Large Popcorn        10.00" << endl;
    cout << "[3] Soda                 5.00" << endl;
    cout << "[4] Mineral Water        2.00" << endl;
    cout << "[5] Hotdog               6.00" << endl;
    cout << endl;

    while (option != 'n') {
        cout << "Select your snack[1, 2, 3...] : ";
        cin >> selectedSnack[i];
        cout << "Select quantity : ";
        cin >> snackquan[i];
        cout << "Any other snacks? [y/n] : ";
        cin >> option;
        option = tolower(option);
        i++;
    }
    return i;
}

class Admin {
public:
    void modifyOrder(Customer& customer);
};

void Admin::modifyOrder(Customer& customer) {
    int choice;
    char opt;
    cout << "``````````````" << endl;
    cout << "                         CINEMA TICKETING SYSTEM : ADMIN MODE" << endl << endl;
    cout << "``````````````" << endl;

    cout << "Select what you want to modify:\n";
    cout << "1. Username\n";
    cout << "2. Email\n";
    cout << "3. Password\n";
    cout << "4. Movie\n";
    cout << "5. Seat\n";
    cout << "6. Snacks\n";
    do{
        cout << "Enter your choice: ";
        cin >> choice;

        if (choice == 1) {
            string newUsername;
            cout << "Enter new username: ";
            cin.ignore();
            getline(cin, newUsername);
            customer.setUsername(newUsername);
        }
        else if (choice == 2) {
            string newEmail;
            cout << "Enter new email: ";
            cin.ignore();
            getline(cin, newEmail);
            customer.setEmail(newEmail);
        }
        else if (choice == 3) {
            string newPassword;
            cout << "Enter new password: ";
            cin.ignore();
            getline(cin, newPassword);
            customer.setPassword(newPassword);
        }
        else if (choice == 4) {
            int newMovie, newShowtime, newHall;
            cout << "Movies offered\n";
            for (int i = 0; i < 5; i++)
                cout << "[" << (i + 1) << "] " << MOVIE_LIST[i] << endl;

            cout << "Please choose your movie[1/2/3/...] : ";
            cin >> newMovie;
            customer.setSelectedMovie(newMovie);

            cout << "Showtime for this movie : \n";
            cout << "[1] " << SHOWTIME_1[newMovie - 1] << " " << HALL_1[newMovie - 1] << " hall\n";
            cout << "[2] " << SHOWTIME_2[newMovie - 1] << " " << HALL_2[newMovie - 1] << " hall\n";
            cout << "Please select your showtime[1/2] : ";
            cin >> newShowtime;
            customer.setSelectedShowtime(newShowtime);

            if (newShowtime == 1)
                newHall = 1;
            else
                newHall = 2;
            customer.setSelectedHall(newHall);
        }
        else if (choice == 5) {
            string newSeat;
            cout << "Choose your seat[A1, A2, A3, .....] : ";
            cin.ignore();
            cin >> newSeat;
            customer.setSelectedSeat(newSeat);
        }
        else if (choice == 6) {
            int numSnacks = customer.snackSelection();
            
        }
        else {
            cout << "Invalid choice!";
        }
       
      
       cout << "\n";
       cout << "Do you want to change any other properties(Y/N) : ";
       cin >> opt;
       opt = tolower(opt); 
       
    }while(opt == 'y');


}

char chooseRole(){
    char repeat;
    cout << "``````````````" << endl;
    cout << "                         CINEMA TICKETING SYSTEM : STATUS VERIFICATION" << endl << endl;
    cout << "``````````````" << endl;
    cout << endl << endl;

    cout << "Are you a user or an admin? (u/a): ";
    cin >> repeat;
   
    repeat = tolower(repeat);

    
    

    

    return repeat;


}


void landingPage(){
    int choice;
    cout << "``````````````" << endl;
    cout << "                         WELCOME TO THE GOLDEN SCREEN CINEMA" << endl << endl;
    cout << "``````````````" << endl;
    cout << endl << endl;

    cout << "                               [1] MOVIE BOOKING"<< endl << endl;
    cout << "                               [2] VIEW RECEIPT" << endl;
    cout << endl << endl << endl;
    
}



int main() {
    Customer customer;
    Admin admin;
    string adminId;
    char repeat;
    int snackCount, firstchoice;

    do {
        
        repeat = chooseRole();
        cout << endl << endl; 
       
       
        if (repeat == 'u') {
            do{ 
            customer.loginPage();
            cout << endl << endl;
        	landingPage();
            cout << endl << endl;            
            cout << "Please Fulfill the requirements to proceed[1/2] : ";
            cin >> firstchoice;
            if(firstchoice == 1)
            {
                customer.movieBooking();
                cout << endl << endl;
            }
            else if(firstchoice == 2){
                if(customer.getSelectedMovie() != 0)
                {customer.generateDetailedReceipt(snackCount);
                cout << endl << endl;
                system("pause");
				break;
                }
                else
                cout << "Sorry you have not booked any movie yet at the moment." << endl << endl;

                }
                
        }
		while(customer.getSelectedMovie() == 0);
		
	        customer.seatSelection();
            cout << endl << endl;
	        snackCount = customer.snackSelection();
            cout << endl << endl;
	        customer.generateDetailedReceipt(snackCount);
            cout << endl << endl;
        }
        else if (repeat == 'a') {
                    do{
                    if(repeat == 'a'){
                    cout << "Please enter your admin id : ";
                    cin >> adminId;
                }
            }while(adminId != "admin123");
            admin.modifyOrder(customer);
            cout << endl << endl;
            customer.generateDetailedReceipt(snackCount);
        }
        else {
            cout << "Invalid input!";
            continue;
        }

        cout << "Do you want to continue? (y/n): ";
        cin >> repeat;
        repeat = tolower(repeat);
    } while (repeat == 'y');

    return 0;
}