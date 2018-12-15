import sys
from PyQt5.QtCore import *
from PyQt5.QtWidgets import (QDesktopWidget, QWidget, QFrame, QHBoxLayout, QVBoxLayout,
							 QApplication, QPushButton)
from stylesheet import stylesheet

class MenuBtn(QPushButton):
	def __init__(self, parent=None, text='', icon=''):
		super(MenuBtn, self).__init__()
		self.text = text
		self.icon = icon

		self.setText(self.text)

		if self.icon != '':
			self.setIcon('./' + self.icon)
			self.iconSize(32, 32)

		self.setMinimumHeight(70)
		self.setStyleSheet('MenuBtn {' + stylesheet['MenuBtn'] + '}')
		self.setFocusPolicy(Qt.NoFocus)
		self.show()


class MenuBar(QFrame):
	def __init__(self, parent=None):
		super(MenuBar, self).__init__(parent)
		self.setMaximumWidth(70)
		self.setStyleSheet('MenuBar {' + stylesheet['MenuBar'] + '}')

		self.layout = QVBoxLayout()
		self.layout.setContentsMargins(0, 0, 0, 0)
		self.layout.setSpacing(0)

		self.layout.addWidget(MenuBtn(self, 'Нажми'))
		self.setLayout(self.layout)
		self.show()

class MainContent(QFrame):
	def __init__(self, parent=None):
		super(MainContent, self).__init__()
		self.setStyleSheet('MainContent {' + stylesheet['MainContent'] + '}')
		self.show()

class MainWindow(QFrame):
	def __init__(self, elements = ()):
		super(MainWindow, self).__init__()
		self.width = 1000
		self.height = 650
		self.elements = elements
		self.setMinimumWidth(self.width)
		self.setMinimumHeight(self.height)
		self.move(self.center('w'), self.center('h'))
		self.setWindowTitle('Smart Price')

		self.layout = QHBoxLayout()
		self.layout.setContentsMargins(0, 0, 0, 0)
		self.layout.setSpacing(0)

		print(self.elements)

		e = 0
		while e < len(self.elements):
			self.layout.addWidget(self.elements[e](self))
			e += 1
		
		self.setLayout(self.layout)

		self.show()

	def center(self, str):
		src = QDesktopWidget().availableGeometry()

		if str == 'w' : return (src.width() - self.width) / 2
		elif str == 'h' : return (src.height() - self.height) / 2


if __name__ == '__main__':
	app = QApplication(sys.argv)
	mainWindow = MainWindow((MenuBar, MainContent))
	sys.exit(app.exec_())  